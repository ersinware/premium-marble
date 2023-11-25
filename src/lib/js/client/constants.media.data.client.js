export const SLIDER_IMAGE_ASPECT_RATIO_BIG_SCREEN = [16, 8],
    SLIDER_IMAGE_ASPECT_RATIO_SMALL_SCREEN = [16, 18],
    SLIDER_IMAGE_MEDIA_DATA = constructMediaDataLinear({
        maxPixelDensity: 5,
        breakpointCount: 1,
        photoMaxWidth: 1280,
        photoMinWidth: 1280,
        minWidth: 1344,
        maxWidth: 9999,
        aspectRatio: SLIDER_IMAGE_ASPECT_RATIO_BIG_SCREEN
    })
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 4,
                photoMaxWidth: 1280,
                photoMinWidth: 977,
                minWidth: 1040,
                maxWidth: 1344,
                aspectRatio: SLIDER_IMAGE_ASPECT_RATIO_BIG_SCREEN
            })
        )
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 10,
                photoMaxWidth: 998,
                photoMinWidth: 278,
                maxWidth: 1040,
                aspectRatio: SLIDER_IMAGE_ASPECT_RATIO_SMALL_SCREEN
            })
        )

export const SECTION_IMAGE_ASPECT_RATIO_BIG_SCREEN = [720, 480],
    SECTION_IMAGE_ASPECT_RATIO_SMALL_SCREEN = [16, 14],
    SECTION_IMAGE_MEDIA_DATA = constructMediaDataLinear({
        maxPixelDensity: 5,
        breakpointCount: 1,
        photoMaxWidth: 720,
        photoMinWidth: 720,
        minWidth: 1296,
        maxWidth: 9999,
        aspectRatio: SECTION_IMAGE_ASPECT_RATIO_BIG_SCREEN
    })
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 5,
                photoMaxWidth: 720,
                photoMinWidth: 465,
                minWidth: 1040,
                maxWidth: 1296,
                aspectRatio: SECTION_IMAGE_ASPECT_RATIO_BIG_SCREEN
            })
        )
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 5,
                photoMaxWidth: 465,
                photoMinWidth: 278,
                maxWidth: 1040,
                aspectRatio: SECTION_IMAGE_ASPECT_RATIO_SMALL_SCREEN
            })
        )

export const SMALL_IMAGE_ASPECT_RATIO = [16, 14],
    SMALL_IMAGE_MEDIA_DATA = constructMediaDataLinear({
        maxPixelDensity: 5,
        breakpointCount: 1,
        photoMaxWidth: 384,
        photoMinWidth: 384,
        minWidth: 1040,
        maxWidth: 9999,
        aspectRatio: SMALL_IMAGE_ASPECT_RATIO
    })
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 1,
                photoMaxWidth: 340,
                photoMinWidth: 340,
                minWidth: 742,
                maxWidth: 1040,
                aspectRatio: SMALL_IMAGE_ASPECT_RATIO
            })
        )
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 5,
                photoMaxWidth: 340,
                photoMinWidth: 210,
                maxWidth: 742,
                minWidth: 483,
                aspectRatio: SMALL_IMAGE_ASPECT_RATIO
            })
        )
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 5,
                photoMaxWidth: 440,
                photoMinWidth: 278,
                maxWidth: 483,
                aspectRatio: SMALL_IMAGE_ASPECT_RATIO
            })
        )

export const ARTICLE_POSTER_IMAGE_ASPECT_RATIO_BIG_SCREEN = [16, 10],
    ARTICLE_POSTER_IMAGE_ASPECT_RATIO_SMALL_SCREEN = [16, 18],
    ARTICLE_POSTER_IMAGE_MEDIA_DATA = constructMediaDataLinear({
        maxPixelDensity: 5,
        breakpointCount: 1,
        photoMaxWidth: 1040,
        photoMinWidth: 1040,
        minWidth: 1104,
        maxWidth: 9999,
        aspectRatio: ARTICLE_POSTER_IMAGE_ASPECT_RATIO_BIG_SCREEN
    })
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 3,
                photoMaxWidth: 1040,
                photoMinWidth: 977,
                minWidth: 1040,
                maxWidth: 1104,
                aspectRatio: ARTICLE_POSTER_IMAGE_ASPECT_RATIO_BIG_SCREEN
            })
        )
        .concat(
            constructMediaDataLinear({
                maxPixelDensity: 5,
                breakpointCount: 12,
                photoMaxWidth: 910,
                photoMinWidth: 278,
                maxWidth: 1040,
                aspectRatio: ARTICLE_POSTER_IMAGE_ASPECT_RATIO_SMALL_SCREEN
            })
        )

export const LOGO_MEDIA_DATA = constructMediaDataLinear({
    maxPixelDensity: 5,
    breakpointCount: 1,
    photoMaxWidth: 163,
    photoMinWidth: 163,
    minWidth: 1040,
    maxWidth: 9999,
})

export const BIG_LOGO_MEDIA_DATA = constructMediaDataLinear({
    maxPixelDensity: 5,
    breakpointCount: 1,
    photoMaxWidth: 224,
    photoMinWidth: 224,
    minWidth: 1040,
    maxWidth: 9999,
}).concat(
    constructMediaDataLinear({
        maxPixelDensity: 5,
        breakpointCount: 1,
        photoMaxWidth: 196,
        photoMinWidth: 196,
        maxWidth: 1040,
    })
)

export const MOBILE_HEADER_LOGO_MEDIA_DATA = constructMediaDataLinear({
    maxPixelDensity: 5,
    breakpointCount: 1,
    photoMaxWidth: 140,
    photoMinWidth: 140,
    maxWidth: 1040,
})

export const LEFT_MENU_LOGO_MEDIA_DATA = constructMediaDataLinear({
    maxPixelDensity: 5,
    breakpointCount: 1,
    photoMaxWidth: 210,
    photoMinWidth: 210,
    maxWidth: 1040,
})

export function constructMediaDataLinear({
    maxPixelDensity,
    breakpointCount,
    photoMaxWidth,
    photoMinWidth,
    lastMaxWidth,
    maxWidth,
    minWidth = 320,
    aspectRatio
}) {
    const mediaData = [],
        queryGap = (maxWidth - minWidth) / breakpointCount,
        photoGap = (photoMaxWidth - photoMinWidth) / breakpointCount;

    for (let density = 1; density < maxPixelDensity + 1; density++)
        for (let breakpoint = 0; breakpoint < breakpointCount; breakpoint++)
            mediaData.push({
                density,
                maxWidth: lastMaxWidth && breakpoint === 0 ? lastMaxWidth : maxWidth - queryGap * breakpoint,
                minWidth:
                    breakpoint === breakpointCount - 1 && minWidth === 320 ? 320 : maxWidth - queryGap * (breakpoint + 1) + 0.1,
                photoWidth: Math.round((photoMaxWidth - photoGap * breakpoint) * density),
                aspectRatio
            });

    return mediaData;
}