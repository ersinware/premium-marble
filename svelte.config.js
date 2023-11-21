import adapter from "@sveltejs/adapter-node";

const config = {
    kit: {
        adapter: adapter({ precompress: false }),
        csrf: { checkOrigin: false },
        csp: {
            directives: {
                "default-src": ["self"],
                "img-src": ["self", "blob:", "data:"],
                "style-src": ["self", "unsafe-inline", "https://fonts.googleapis.com"],
                "font-src": ["self", "unsafe-inline", "https://fonts.gstatic.com"],
                "base-uri": ["self"],
                "frame-ancestors": ["none"],
                "frame-src": ["https://www.google.com/", "https://maps.google.com/"]
            },
            mode: "auto",
        },
    },
};

export default config;
