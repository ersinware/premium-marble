<script>
	import { browser } from "$app/environment";
	import { afterNavigate, beforeNavigate } from "$app/navigation";
	import { page } from "$app/stores";
	import DynamicModals from "$lib/components/DynamicModals.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Progress from "$lib/components/Progress.svelte";
	import Ripple from "$lib/components/Ripple.svelte";
	import Header from "$lib/components/big-screen/Header.svelte";
	import DynamicLeftMenus from "$lib/components/small-screen/DynamicLeftMenus.svelte";
	import MobileHeader from "$lib/components/small-screen/MobileHeader.svelte";
	import Snackbars from "$lib/components/snackbar/Snackbars.svelte";
	import "$lib/css/global.big.screen.css";
	import "$lib/css/global.css";
	import "$lib/css/global.inputs.css";
	import "$lib/css/global.modals.css";
	import "$lib/css/global.small.screen.css";
	import "$lib/css/global.theme.css";
	import "$lib/css/project.global.big.screen.css";
	import "$lib/css/project.global.css";
	import "$lib/css/project.global.small.screen.css";
	import "$lib/css/project.specific.global.big.screen.css";
	import "$lib/css/project.specific.global.css";
	import "$lib/css/project.specific.global.small.screen.css";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { init as initLocalizationUtilClient } from "$lib/js/client/localization/localization.util.client.js";
	import { createStore, getStore, init as initUtil } from "$lib/js/client/util.client.js";
	import { init as initInputsUtil } from "$lib/js/client/util.inputs.client";
	import { anyOpenLeftMenu, closeLastLeftMenu, init as initLeftMenu } from "$lib/js/client/util.left.menus.client.js";
	import { anyOpenModal, closeLastModal, init as initModals } from "$lib/js/client/util.modals.client.common";
	import { init as initResponsiveUtil } from "$lib/js/client/util.responsive.client.js";
	import { init as initSnackbars, showSnackbar } from "$lib/js/client/util.snackbars.client.js";
	import { ERROR_NO_INTERNET_CONNECTION, ONLINE_BACK } from "$lib/js/common/constants.common";
	import { init as initLocalizationUtilCommon } from "$lib/js/common/localization/localization.util.common.js";
	import { yieldToMain } from "$lib/js/common/util.common";
	import { onMount } from "svelte";
	import Lamp from "./../lib/components/Lamp.svelte";

	export let data;

	createStores();

	let firstTime = true,
		animateFooter = true;

	const url = getStore("url"),
		lang = getStore("lang"),
		navigationState = getStore("navigationState"),
		dontInterruptModal = getStore("dontInterruptModal");

	$: url.set($page.url);

	if (browser) init();
	onMount(_onMount);
	beforeNavigate(_beforeNavigate);
	afterNavigate(_afterNavigate);

	function createStores() {
		createStore("url", $page.url);
		createStore("lang", data.lang);
		createStore("rippleTargetInfo");
		createStore("touchable");
		createStore("hoverable");
		createStore("bigScreen");
		createStore("openSnackbars", []);
		createStore("openLeftMenus", []);
		createStore("openDynamicLeftMenus", []);
		createStore("navigationState");
		createStore("openModals", []);
		createStore("openDynamicModals", []);
		createStore("holder");
		createStore("dontInterruptModal");
	}

	function init() {
		const bigScreen = getStore("bigScreen");

		initLocalizationUtilCommon(data.paths, data.searchParams, data.searchValues);
		initLocalizationUtilClient(getStore("lang"), url);
		initUtil(getStore("rippleTargetInfo"), dontInterruptModal);
		initResponsiveUtil(getStore("touchable"), getStore("hoverable"), bigScreen);
		initSnackbars(getStore("openSnackbars"), bigScreen);
		initLeftMenu(getStore("openLeftMenus"), getStore("openDynamicLeftMenus"));
		initModals(getStore("openModals"), getStore("openDynamicModals"), null, getStore("holder"));
		initInputsUtil(dontInterruptModal);
	}

	async function _beforeNavigate({ type, cancel }) {
		if (type === "popstate") {
			if ($dontInterruptModal) {
				cancel();

				return;
			}

			if (anyOpenLeftMenu()) {
				closeLastLeftMenu();
				cancel();

				return;
			}

			if (anyOpenModal()) {
				closeLastModal();
				cancel();

				return;
			}
		}

		if (type !== "leave") $navigationState = "navigating";
	}

	async function _afterNavigate() {
		if (firstTime) {
			firstTime = false;

			return;
		}

		$navigationState = "navigated";
		animateFooter = true;
		await yieldToMain();
		animateFooter = false;
	}

	async function _onMount() {
		await navigator.serviceWorker.ready;
		navigator.serviceWorker.addEventListener("message", onMessage);
	}

	function onMessage(event) {
		console.log("onMessage:", event);

		switch (event.data.type) {
			case ERROR_NO_INTERNET_CONNECTION:
				showSnackbar({
					content: L("connection-lost", $lang),
					backgroundColor: "var(--error-color)",
				});

				break;
			case ONLINE_BACK:
				showSnackbar({
					content: L("online-back", $lang),
					backgroundColor: "green",
				});
		}
	}
</script>

<Progress bind:state={$navigationState} />

<Header />
<MobileHeader />

<div
	class="flex a-i-c j-c-c max-w page-p-b p-h-d m-h-auto big-screen-page-p-t-for-header small-screen-page-p-t-for-mobile-header"
>
	<slot />
</div>

{#key animateFooter}
	<Footer />
{/key}

<DynamicModals />
<DynamicLeftMenus />
<Lamp />
<Snackbars />
<Ripple />
