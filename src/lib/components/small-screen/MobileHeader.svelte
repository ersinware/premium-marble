<script>
	import { performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { openLeftMenu } from "$lib/js/client/util.left.menus.client";
	import LeftMenu from "./LeftMenu.svelte";

	async function onMenuClick(event) {
		await performRippleEffectAndWait(event);

		openLeftMenu({ id: "left-menu", component: LeftMenu });
	}
</script>

<header id="mobile-header" class="p-f t-0 p-c-h flex j-c-c w-100 for-small-screen">
	<div id="mobile-header-content" class="w-100-minus-padding-h flex f-s-b a-i-c h-100">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<svg
			id="mobile-header-menu-icon"
			class="pointer"
			on:click={onMenuClick}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 6H20M4 12H14M4 18H9"
				stroke="var(--mobile-header-menu-icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>

		<div id="mobile-header-logo" class="third-background-color b-r-d" />
	</div>
</header>

<style>
	@media (max-width: 65em) {
		#mobile-header {
			height: var(--mobile-header-height);
            background-color: var(--header-background-color);

			backdrop-filter: blur(1rem);
		}

		#mobile-header-content {
			border-bottom: var(--divider-color) .5px solid;
		}

		#mobile-header-menu-icon {
			--mobile-header-menu-icon-color: var(--title-color);

			height: 2.5rem;
		}

		#mobile-header-logo {
			width: 7rem;
			height: 2.5rem;
		}

		@media (hover: hover) {
			#mobile-header-menu-icon {
				transition: all 0.25s ease-in-out;
			}

			.pointer:hover {
				--mobile-header-menu-icon-color: var(--accent-color) !important;
			}
		}
	}
</style>
