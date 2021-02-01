import Theme from "./components";
import {postTypeHandler} from "@frontity/wp-source/src/libraries/handlers";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import menuHandler from "./components/handlers/menu-handler";

const homeHandler = {
    name: "home",
    priority: 10,
    pattern: "/",
    func: async ({route, state, libraries}) => {
        const {api} = libraries.source;
        // 1. fetch the specified page
        const response = await api.get({
            endpoint: ""
        });

        // 2. Transform to json
        const homeData = await response.json();

        // 3. add data to source
        Object.assign(state.source.data[route], {
            homeData,
            isArchive: false,
            isPostTypeArchive: false,
            isHome: true
        });
    }
};

const twentyTwentyTheme = {
    name: "@frontity/twentytwenty-theme",
    roots: {
        /**
         *  In Frontity, any package can add React components to the site.
         *  We use roots for that, scoped to the `theme` namespace.
         */
        theme: Theme,
    },
    state: {
        /**
         * State is where the packages store their default settings and other
         * relevant state. It is scoped to the `theme` namespace.
         */
        theme: {
            colors: {
                gray: {
                    base: "#6D6D6D",
                    light: "#DCD7CA",
                    lighter: "#F5EFE0",
                },
                primary: "#2d3748",
                headerBg: "#ffffff",
                footerBg: "#ffffff",
                bodyBg: "#f5efe0",
            },
            // Whether to show the search button in page header
            showSearchInHeader: true,
            // Menu links to display in the header
            menu: [
                {
                    name: 'Home',
                    href: '/',
                },
                {
                    name: 'About',
                    href: '/about/',
                },
                {
                    name: 'Recipes',
                    href: '/recipes/',

                    /**
                     submenu: [
                     {
                            name: 'Salad',
                            href: '/category/salad/'
                        },
                     {
                            name: 'Italian',
                            href: '/category/italian/'
                        },
                     {
                            name: 'Vegan',
                            href: '/category/vegan/'
                        }
                     ]
                     **/
                },
                {
                    name: 'Services',
                    href: '/services/',
                },
                /**
                 {
                    name: 'Services',
                    href: '/services/',


                     submenu: [
                     {
                            name: 'Photography',
                            href: '/category/salad/'
                        },
                     {
                            name: 'Videography',
                            href: '/category/italian/'
                        },
                     {
                            name: 'Catering',
                            href: '/category/vegan/'
                        }
                     ]

                }
                 **/
                /**
                 ["Home", "/"],
                 ["Recipes", "/recipes/"],
                 ["About Me", "/about/"],
                 ["Gardening", "/gardening/"]
                 **/
            ],
            menuUrl: "main-menu",
            // State for the menu on mobile
            isMobileMenuOpen: false,
            // State for the search modal on mobile
            isSearchModalOpen: false,
            // Whether to show all post content or only excerpt (summary) in archive view
            showAllContentOnArchive: false,
            // Settings for the featured media (image or video)
            featuredMedia: {
                // Whether to show it on archive view
                showOnArchive: true,
                // Whether to show it on post
                showOnPost: true,
            },
            // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
            autoPreFetch: "in-view",
            /**
             * At the moment, we only include the ascii characters of Inter font.
             * Values can be "us-ascii" | "latin" | "all"
             */
            fontSets: "all",
        },
        source: {
            api: "https://admin.ruthgeorgiev.com/wp-json",
            postTypes: [
                {
                    type: "profiles", // type slug
                    endpoint: "profiles", // REST API endpoint
                    archive: "/profiles" // link where this custom posts are listed
                },
                {
                    type: "travel", // type slug
                    endpoint: "travel", // REST API endpoint
                    archive: "/travel" // link where this custom posts are listed
                }
            ],
            taxonomies: [
                {
                    taxonomy: "cuisine", // taxonomy slug
                    endpoint: "cuisine", // REST API endpoint
                    postTypeEndpoint: "posts", // endpoint from which posts from this taxonomy are fetched
                },
                {
                    taxonomy: "dishes", // taxonomy slug
                    endpoint: "dishes", // REST API endpoint
                    postTypeEndpoint: "posts", // endpoint from which posts from this taxonomy are fetched
                },
                {
                    taxonomy: "diets", // taxonomy slug
                    endpoint: "diets", // REST API endpoint
                    postTypeEndpoint: "posts", // endpoint from which posts from this taxonomy are fetched
                },
                {
                    taxonomy: "meals", // taxonomy slug
                    endpoint: "meals", // REST API endpoint
                    postTypeEndpoint: "posts", // endpoint from which posts from this taxonomy are fetched
                },
                /**
                 {
                    taxonomy: "destinations", // taxonomy slug
                    endpoint:"destinations", // REST API endpoint
                    postTypeEndpoint: "travel", // endpoint from which posts from this taxonomy are fetched
                },
                 {
                    taxonomy: "experiences", // taxonomy slug
                    endpoint:"experiences", // REST API endpoint
                    postTypeEndpoint: "travel", // endpoint from which posts from this taxonomy are fetched
                }
                 **/
            ]
        }
    },
    /**
     * Actions are functions that modify the state or deal with other parts of
     * Frontity like libraries.
     */
    actions: {
        theme: {
            openMobileMenu: ({state}) => {
                state.theme.isMobileMenuOpen = true;
            },
            closeMobileMenu: ({state}) => {
                state.theme.isMobileMenuOpen = false;
            },
            openSearchModal: ({state}) => {
                state.theme.isSearchModalOpen = true;
            },
            closeSearchModal: ({state}) => {
                state.theme.isSearchModalOpen = false;
            },
            beforeSSR: async ({state, actions}) => {
                await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
            },
        }
    },
    libraries: {
        html2react: {
            /**
             * Add a processor to `html2react` so it processes the `<img>` tags
             * inside the content HTML. You can add your own processors too
             */
            processors: [image, iframe],
        },
        source: {
            handlers: [menuHandler]
        }
    },
};

export default twentyTwentyTheme;
