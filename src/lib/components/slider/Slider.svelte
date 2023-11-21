<script>
	import { browser } from "$app/environment";
	import Navigation from "$lib/components/slider/Navigation.svelte";
	import {
		onMountHoverable,
		onMountHoverableReverse,
		onMountTouchable,
		onMountTouchableReverse,
		removeAllPointerRelated,
	} from "$lib/js/client/util.responsive.client";
	import { randomID } from "$lib/js/common/util.common";
	import { onDestroy, onMount } from "svelte";

	export let command = "default",
		absoluteIndicators,
		absoluteIndicatorsWithArrows,
		noArrows,
		noIndicators,
		skeletonsCount;

	let id = randomID(),
		mount,
		mounting = new Promise((resolve) => (mount = resolve)),
		wrapper,
		index = 0,
		indexAtStart,
		lastX,
		sliderContent,
		sliderContentWidth,
		gap,
		pLeft,
		pRight,
		itemsLength,
		itemWidth,
		columnCount,
		pageCount,
		showArrows = "show",
		navigationCommand,
		startX,
		startY,
		startScrollLeft,
		nextEdgeAtStart,
		previousEdgeAtStart,
		startTime;

	$: onCommand(command);

	onMount(_onMount);

	if (browser) onDestroy(_onDestroy);

	async function onCommand() {
		if (!command) return;

		await mounting;

		switch (command) {
			case "show":
				build("show");
				break;
			case "recalculate":
				build("recalculate");
				break;
		}

		command = "";
	}

	function _onMount() {
		setInterval(() => {
			if (showArrows === true) return;

			toLeft();
		}, 5000);

		sliderContent = wrapper.querySelector(".slider-content");

		if (command === "default") build("show");

		onMountHoverable({
			id,
			onMount: () => {
				if (showArrows === "alwaysShow") return;

				wrapper.addEventListener("mouseenter", onMouseEnter);
				wrapper.addEventListener("mouseleave", onMouseLeave);
				wrapper.addEventListener("mousemove", onMouseMove);
			},
		});

		onMountHoverableReverse({
			id,
			reverse: () => {
				if (showArrows === "alwaysShow") return;

				wrapper.removeEventListener("mouseenter", onMouseEnter);
				wrapper.removeEventListener("mouseleave", onMouseLeave);
				wrapper.removeEventListener("mousemove", onMouseMove);
			},
		});

		onMountTouchable({
			id,
			onMount: () => {
				sliderContent.addEventListener("touchstart", onTouchStart);
				sliderContent.addEventListener("touchmove", onTouchMove);
				sliderContent.addEventListener("touchcancel", onTouchCancel);
				sliderContent.addEventListener("touchend", onTouchEnd);
			},
		});

		onMountTouchableReverse({
			id: id,
			reverse: () => {
				sliderContent.removeEventListener("touchstart", onTouchStart);
				sliderContent.removeEventListener("touchmove", onTouchMove);
				sliderContent.removeEventListener("touchcancel", onTouchCancel);
				sliderContent.removeEventListener("touchend", onTouchEnd);
			},
		});

		mount();

		console.timeEnd("slider initialization");
	}

	function _onDestroy() {
		removeAllPointerRelated(id);
	}

	function build(_navigationCommand) {
		calculate();

		if (_navigationCommand === "show") setTimeout(() => (navigationCommand = _navigationCommand), 1000);
		else navigationCommand = _navigationCommand;
	}

	function calculate() {
		sliderContentWidth = sliderContent.clientWidth;
		const computedStyle = getComputedStyle(sliderContent);
		gap = parseInt(computedStyle.columnGap);
		pLeft = parseInt(computedStyle.paddingLeft);
		pRight = parseInt(computedStyle.paddingRight);

		const items = sliderContent.children;
		itemsLength = sliderContent.children.length;

		if (itemsLength < 1) return;

		itemWidth = items[0].clientWidth;
		columnCount = Math.round(sliderContentWidth / (itemWidth + gap));
		if (columnCount === 0) columnCount = 1;

		const newItemsLength = adjustSkeletonsCount();
		if (columnCount >= newItemsLength) pageCount = 0;
		else pageCount = Math.ceil(newItemsLength / columnCount);

		if (index > 0 && index > pageCount - 1) index = pageCount - 1;
	}

	function adjustSkeletonsCount() {
		if (skeletonsCount === undefined) return itemsLength;

		const tempSkeletonsCount = skeletonsCount;
		if (itemsLength === columnCount) skeletonsCount = columnCount - 1;
		else {
			const _skeletonsCount = columnCount - ((itemsLength - skeletonsCount) % columnCount);

			if (_skeletonsCount === 0) skeletonsCount = columnCount;
			else skeletonsCount = _skeletonsCount;
		}

		return itemsLength - tempSkeletonsCount + skeletonsCount;
	}

	function onMouseEnter() {
		if (showArrows === 0) return;

		showArrows = true;
	}

	function onMouseMove() {
		if (showArrows === 0) return;

		showArrows = true;
	}

	function onMouseLeave() {
		if (showArrows === 0) return;

		showArrows = false;
	}

	function onTouchStart(event) {
		indexAtStart = index;
		startTime = Date.now();

		const touch = event.touches[0];
		startX = touch.clientX;
		startY = touch.clientY;

		startScrollLeft = sliderContent.scrollLeft;
		nextEdgeAtStart = getNextEdge();
		previousEdgeAtStart = getPreviousEdge();
	}

	function onTouchMove(event) {
		if (startY === "block") return;

		const lastY = event.touches[0].clientY;
		if (Math.abs(startY - lastY) > 30) {
			startY = "block";

			return;
		}

		lastX = event.touches[0].clientX;

		const currentLeft = startScrollLeft + startX - lastX;
		sliderContent.scrollLeft = currentLeft;

		if (currentLeft > nextEdgeAtStart) {
			if (atLast()) return;

			increment();

			nextEdgeAtStart = getNextEdge();
			previousEdgeAtStart = getPreviousEdge();
		} else if (currentLeft < previousEdgeAtStart) {
			if (atFirst()) return;

			decrement();

			nextEdgeAtStart = getNextEdge();
			previousEdgeAtStart = getPreviousEdge();
		}
	}

	function onTouchCancel() {
		onTouchEnd();
	}

	function onTouchEnd() {
		if (indexAtStart === index && Date.now() - startTime < 333) {
			if (lastX > startX) toRight();
			else if (lastX < startX) toLeft();

			clear();

			return;
		}

		clear();
		place();
	}

	function toLeft() {
		if (atLast()) {
			// if ($hoverable) return;

			index = 0;
		} else increment();

		sliderContent.scrollTo({
			left: getTargetLeft(),
			behavior: "smooth",
		});
	}

	function toRight() {
		if (atFirst()) {
			// if ($hoverable) return;

			index = pageCount - 1;
		} else decrement();

		sliderContent.scrollTo({
			left: getTargetLeft(),
			behavior: "smooth",
		});
	}

	function place(notSmooth) {
		if (notSmooth) {
			sliderContent.scrollLeft = getTargetLeft();

			return;
		}

		sliderContent.scrollTo({
			left: getTargetLeft(),
			behavior: "smooth",
		});
	}

	function toIndex(message) {
		index = message.detail;
		place();
	}

	function getTargetLeft() {
		return index * sliderContentWidth + index * gap - index * (pLeft + pRight);
	}

	function getNextEdge() {
		return getPreviousWidth(index) + (getCurrentWidth(index) - gap) / 2;
	}

	function getPreviousEdge() {
		return getPreviousWidth(index - 1) + (getCurrentWidth(index - 1) - gap) / 2;
	}

	function getPreviousWidth(index) {
		if (index === 0) return 0;

		const previousItemCount = index * columnCount;
		const previousItemWidth = previousItemCount * itemWidth;
		const previousGapCount = previousItemCount - 1;
		const previousGapWidth = previousGapCount * gap;

		let previousTotalWidth = previousItemWidth + previousGapWidth;
		if (index !== 0) previousTotalWidth += pLeft;

		return previousTotalWidth;
	}

	function getCurrentWidth() {
		const currentItemCount = columnCount;
		const currentItemWidth = currentItemCount * itemWidth;
		const currentGapCount = columnCount + 1;
		const currentGapWidth = currentGapCount * gap;

		return currentItemWidth + currentGapWidth;
	}

	function decrement() {
		index--;
	}

	function increment() {
		index++;
	}

	function atLast() {
		return index === pageCount - 1;
	}

	function atFirst() {
		return index === 0;
	}

	function clear() {
		startX = undefined;
		lastX = undefined;
	}
</script>

<svelte:window
	on:resize={() => {
		build("recalculateForResize");
		place(true);
	}}
/>

<div class="wrapper" bind:this={wrapper}>
	<slot />

	<Navigation
		{absoluteIndicators}
		{absoluteIndicatorsWithArrows}
		{noArrows}
		{noIndicators}
		bind:index
		bind:pageCount
		bind:showArrows
		bind:command={navigationCommand}
		on:toLeft={toLeft}
		on:toRight={toRight}
		on:toIndex={toIndex}
	/>
</div>

<style>
	.wrapper {
		position: relative;
	}
</style>
