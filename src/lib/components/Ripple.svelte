<script>
	import { RIPPLE_TYPE_ONE_DURATION, RIPPLE_TYPE_ZERO_DURATION } from "$lib/js/client/constants.client";
	import { getStore } from "$lib/js/client/util.client";
	import { yieldToMain } from "$lib/js/common/util.common";
	import { cubicOut } from "svelte/easing";
	import { scale } from "svelte/transition";

	// ripple type:
	// 0 -> framed
	// 1 -> circle

	const rippleTargetInfo = getStore("rippleTargetInfo");

	let perform, wrapperStyle, rippleStyle;

	$: performEffect($rippleTargetInfo);

	async function performEffect() {
		if (!$rippleTargetInfo) return;

		perform = false;

		const { position, width, height, left, top, backgroundColor } = getCalculated();

		rippleStyle =
			`position: ${position};` +
			`width: ${width};` +
			`height: ${height};` +
			`left: ${left};` +
			`top: ${top};` +
			`background-color: ${backgroundColor};`;

		await yieldToMain();
		window.requestAnimationFrame(() => (perform = true));
	}

	function getCalculated() {
		switch ($rippleTargetInfo.rippleType) {
			case 0:
				return getForTypeZero();
			case 1:
				return getForTypeOne();
		}
	}

	function getForTypeZero() {
		let { width, height, x, y, clickX, clickY, rippleColor, borderRadius } = $rippleTargetInfo;

		wrapperStyle =
			`width: ${width}px;` +
			`height: ${height}px;` +
			`left: ${x}px;` +
			`top: ${y}px;` +
			`border-radius: ${borderRadius}`;

		if (width < height) width = height;

		return {
			position: "absolute",
			width: `${width * 2}px`,
			height: `${width * 2}px`,
			left: `${clickX - x}px`,
			top: `${clickY - y}px`,
			backgroundColor: rippleColor,
		};
	}

	function getForTypeOne() {
		const { clickX, clickY, rippleColor } = $rippleTargetInfo;
		return {
			position: "fixed",
			left: `${clickX}px`,
			top: `${clickY}px`,
			backgroundColor: rippleColor,
		};
	}

	function onIntroEnd() {
		perform = false;
		rippleStyle = "";
		wrapperStyle = "";
	}
</script>

{#if perform && $rippleTargetInfo.rippleType === 0}
	<article style={wrapperStyle} class="wrapper p-none p-f o-hidden">
		<article
			style={rippleStyle}
			class="ripple"
			in:scale={{ start: 0, duration: RIPPLE_TYPE_ZERO_DURATION, opacity: 1, easing: cubicOut }}
			on:introend={onIntroEnd}
		/>
	</article>
{:else if perform}
	<article
		style={rippleStyle}
		class="ripple type-one p-none"
		in:scale={{ start: 0, duration: RIPPLE_TYPE_ONE_DURATION, opacity: 1, easing: cubicOut }}
		on:introend={onIntroEnd}
	/>
{/if}

<style>
	.wrapper,
	.ripple {
		z-index: 99999999;
	}

	.ripple {
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}

	.type-one {
		width: 7.5rem;
		height: 7.5rem;
	}
</style>
