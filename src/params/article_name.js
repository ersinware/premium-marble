import { articles } from "$lib/js/common/util.data.articles";

export function match(param) {
    for (const articleContents of articles.values())
        if (articleContents.has(param))
            return true
}