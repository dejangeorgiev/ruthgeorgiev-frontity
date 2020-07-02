const settings = {
    name: "rg-frontity",
    state: {
        frontity: {
            url: "https://ruthgeorgiev.com",
            title: "Ruth Georgiev",
            description: "Cooking with love & travelling with passion"
        },
        newsletter: {
            slot: 'above-the-footer'
        }
    },
    packages: [
        {
            "name": "@frontity/twentytwenty-theme",
            "state": {
                "theme": {
                    "menu": [],
                    "featured": {
                        "showOnList": true,
                        "showOnPost": true
                    }
                }
            }
        },
        {
            name: "@frontity/wp-source",
            state: {
                source: {
                    api: "https://admin.ruthgeorgiev.com/wp-json",
                    postsPage: '/recipes',
                    homepage: '/'
                }
            }
        },
        {
            name: "@frontity/google-analytics",
            state: {
                googleAnalytics: {
                    trackingId: 'UA-164715789-1'
                },
            },
        },
        {
            name: "@frontity/google-tag-manager",
            state: {
                googleTagManager: {
                    containerId: 'GTM-NBGPD9N'
                },
            },
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;
