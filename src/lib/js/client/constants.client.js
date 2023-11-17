import { cubicInOut } from "svelte/easing";

export const TRANSITION_DURATION_PAGE = 500;
export const TRANSITION_PAGE = { y: 16, duration: TRANSITION_DURATION_PAGE, easing: cubicInOut };

export const TRANSITION_UTIL_LEFT_MENU_ICON = {
    delay: TRANSITION_DURATION_PAGE,
    duration: 625,
    easing: cubicInOut,
};

export const MODAL_TRANSITION_DURATION = 500;
export const MODAL_TRANSITION_Y = 16;
export const LEFT_MENU_TRANSITION_X = -16
export const LEFT_MENU_TRANSITION_DURATION = 500

export const PROGRESS_BAR_NAVIGATED_TRANSITION_DURATION = 1000;
export const MODAL_PROGRESS_BAR_NAVIGATED_TRANSITION_DURATION = 500;

/* */

export const RIPPLE_TYPE_ZERO_DURATION = 400;
export const RIPPLE_TYPE_ONE_DURATION = 300;
export const WAIT_DURATION_FOR_RIPPLE_TYPE_ONE = RIPPLE_TYPE_ONE_DURATION;
