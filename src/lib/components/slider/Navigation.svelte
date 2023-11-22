<script>
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { waitFor } from "$lib/js/common/util.common";
	import { createEventDispatcher } from "svelte";
	import { flip } from "svelte/animate";
	import { cubicInOut } from "svelte/easing";
	import { fly } from "svelte/transition";

	export let index,
		pageCount,
		showArrows,
		absoluteIndicators,
		absoluteIndicatorsWithArrows,
		noArrows,
		noIndicators,
		command;

	let show,
		indicators = [],
		indicatorTransition = {};

	const hoverable = getStore("hoverable"),
		leftArrowTransition = { x: -12, easing: cubicInOut },
		rightArrowTransition = { x: 12, easing: cubicInOut },
		indicatorsWrapperTransition = { y: 12, easing: cubicInOut };

	$: onCommand(command);

	const dispatch = createEventDispatcher();

	function onCommand() {
		if (!command) return;

		switch (command) {
			case "show":
				_show();
				break;
			case "recalculate":
				recalculate();
				break;
			case "recalculateForResize":
				recalculate(command);
				break;
		}

		command = "";
	}

	async function _show() {
		for (let i = 0; i < pageCount; i++) indicators.push(i);

		show = true;

		if (showArrows === "alwaysShow") return;

		// showArrows = 1;
		// setTimeout(() => {
		// 	if (showArrows === true) return;

		// 	showArrows = false;
		// }, 2500);

        showArrows = true
	}

	async function recalculate(command) {
		let temp = await hideAndGetStateOfArrows();

		indicatorTransition = { x: 40, duration: 400 };

		if (pageCount < indicators.length) {
			while (indicators.length !== pageCount)
				if (command === "recalculateForResize") indicators.pop();
				else indicators.shift();

			indicators = indicators;

			showArrowsAgain(temp);

			return;
		}

		for (let i = indicators.length; i < pageCount; i++) indicators.push(i);

		indicators = indicators;

		showArrowsAgain(temp);
	}

	async function hideAndGetStateOfArrows() {
		if (absoluteIndicatorsWithArrows) {
			const temp = showArrows;
			showArrows = 0;

			await waitFor(400);

			return temp;
		}
	}

	function showArrowsAgain(temp) {
		if (!absoluteIndicatorsWithArrows) return;

		if (!temp) {
			showArrows = false;

			return;
		}

		if (temp === "alwaysShow") {
			setTimeout(() => (showArrows = "alwaysShow"), 1500);

			return;
		}

		setTimeout(() => {
			showArrows = 1;

			setTimeout(() => {
				if (showArrows === true) return;

				showArrows = false;
			}, 2500);
		}, 1500);
	}

	async function onToLeft(event) {
		await performRippleEffectAndWait(event);
		dispatch("toLeft");
	}

	async function onToRight(event) {
		await performRippleEffectAndWait(event);
		dispatch("toRight");
	}

	async function onToIndex(event, _index) {
		await performRippleEffectAndWait(event);
		dispatch("toIndex", _index);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="wrapper"
	class:wrapperNoMarginTop={(show && pageCount === 0) || noIndicators || absoluteIndicators}
	class:absoluteIndicatorsWithArrows
>
	{#if show && pageCount > 0}
		{#if $hoverable && !noArrows && showArrows}
			<svg
				class="navigationArrow navigationArrowLeft"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				on:click={onToRight}
				transition:fly={leftArrowTransition}
			>
				<path
					d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
				/>
			</svg>
		{/if}

		{#if !noIndicators}
			<div
				class="indicatorsWrapper"
				class:absoluteIndicatorsWrapper={absoluteIndicators}
				transition:fly={indicatorsWrapperTransition}
			>
				{#each indicators as _, _index (_)}
					<div
						class="indicator"
						class:activeIndicator={index === _index}
						on:click={(event) => onToIndex(event, _index)}
						in:fly|local={indicatorTransition}
						animate:flip={{ duration: 400 }}
					/>
				{/each}
			</div>
		{/if}

		{#if $hoverable && !noArrows && showArrows}
			<svg
				class="navigationArrow navigationArrowRight"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				on:click={onToLeft}
				transition:fly={rightArrowTransition}
			>
				<path
					d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
				/>
			</svg>
		{/if}
	{/if}
</div>

<style>
	.wrapper:not(.absoluteIndicatorsWithArrows) {
		height: var(--wrapperHeight, 0.25rem);
		margin-top: var(--indicatorsWrapperMarginTop, 3rem);

		transition: margin-top 0.5s, height 0.5s;
	}

	.wrapper.wrapperNoMarginTop {
		--wrapperHeight: 0rem;
		--indicatorsWrapperMarginTop: 0rem;

		height: 0;
		margin-top: 0;
	}

	.indicatorsWrapper {
		width: 100%;
		overflow-x: clip;

		position: var(--indicatorsWrapperPosition, static);
		left: 50%;
		transform: var(--indicatorsWrapperTransform, none);
		bottom: var(--indicatorsWrapperBottom, unset);

		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.wrapper:not(.absoluteIndicatorsWithArrows) .absoluteIndicatorsWrapper {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: var(--absoluteIndicatorsWrapperBottom, var(--main-v-padding));
	}

	.absoluteIndicatorsWithArrows {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: var(--absoluteIndicatorsWrapperBottom, 3rem);

		display: flex;
		align-items: center;
		gap: 1rem;

		height: 1.75rem;
	}

	.indicator {
		width: 1.25rem;
		height: 0.25rem;

		background-color: var(--text-color-unimportant);

		border-radius: 0.25rem;

		transition: background-color 0.25s;
		border: 1px solid var(--divider-color);
	}

	.activeIndicator {
		background-color: var(--accent-color);
	}

	@media (hover: hover) {
		.indicator,
		.navigationArrow {
			cursor: pointer;
		}

		.wrapper:not(.absoluteIndicatorsWithArrows) .navigationArrow {
			position: absolute;
			top: var(
				--navigationArrowTop,
				calc((100% - var(--indicatorsWrapperMarginTop, 3rem) - var(--wrapperHeight, 0.25rem)) / 2)
			);
			z-index: 2;
		}

		.navigationArrow {
			width: 1rem;
			aspect-ratio: 1/1;

			padding: 0.75rem;

			background-color: var(--accent-color);
			fill: var(--navigation-arrow-color);

			border-radius: 50%;

			transition: background-color 0.25s;
		}

		.navigationArrow:hover {
			background-color: var(--accent-color-darker);
		}

		.wrapper:not(.absoluteIndicatorsWithArrows) .navigationArrowLeft {
			left: max(calc((100vw - var(--max-width)) / 2), var(--main-h-padding));
			transform: translate(-50%, -50%);
		}

		.wrapper:not(.absoluteIndicatorsWithArrows) .navigationArrowRight {
			right: max(calc((100vw - var(--max-width)) / 2), var(--main-h-padding));
			transform: translate(50%, -50%);
		}

		.indicator:hover {
			background-color: var(--accent-color);
		}

        .activeIndicator:hover {
			background-color: var(--accent-color-darker);
		}
	}
</style>
