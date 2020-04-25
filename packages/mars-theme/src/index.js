import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from '@frontity/html2react/processors/iframe';
import Comment from './components/global/Comment';


const marsTheme = {
    name: "@frontity/mars-theme",
    roots: {
        /**
         *  In Frontity, any package can add React components to the site.
         *  We use roots for that, scoped to the `theme` namespace.
         */
        theme: Theme
    },
    state: {
        /**
         * State is where the packages store their default settings and other
         * relevant state. It is scoped to the `theme` namespace.
         */
        theme: {
            menu: [
                ["Home", "/"],
                ["Recipes", "/recipes/"]
            ],
            isMobileMenuOpen: false,
            featured: {
                showOnList: true,
                showOnPost: true
            }
        },
        source: {
            params: {
                per_page: 5,
                type: ["post", "page"]
            },
            postTypes: [
                {
                    type: "post",
                    endpoint: "posts",
                    archive: "/recipes"
                }
            ],
            taxonomies: [
                {
                    taxonomy: "category",
                    endpoint: "categories",
                    postTypeEndpoint: "posts",
                    params: {
                        per_page: 5,
                        _embed: true
                    }
                }
            ]
        }
    },
    /**
     * Actions are functions that modify the state or deal with other parts of
     * Frontity like libraries.
     */
    actions: {
        theme: {
            toggleMobileMenu: ({state}) => {
                state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
            },
            closeMobileMenu: ({state}) => {
                state.theme.isMobileMenuOpen = false;
            }
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
        comments: {
            Comment
        }
    }
};

export default marsTheme;
