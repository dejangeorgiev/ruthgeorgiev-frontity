import client from "@frontity/core/src/client";
import frontity__twentytwenty_theme_default from "@frontity/twentytwenty-theme/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__google_analytics_default from "@frontity/google-analytics/src/index";
import frontity__google_tag_manager_default from "@frontity/google-tag-manager/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";

const packages = {
  frontity__twentytwenty_theme_default,
  frontity__wp_source_default,
  frontity__google_analytics_default,
  frontity__google_tag_manager_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
};

export default client({ packages });

if (module["hot"]) {
  module["hot"].accept(
    [
      "@frontity/core/src/client",
      "@frontity/twentytwenty-theme/src/index",
      "@frontity/wp-source/src/index",
      "@frontity/google-analytics/src/index",
      "@frontity/google-tag-manager/src/index",
      "@frontity/tiny-router/src/index",
      "@frontity/html2react/src/index",
    ],
    () => {
      const client = require("@frontity/core/src/client").default;
      const frontity__twentytwenty_theme_default = require("@frontity/twentytwenty-theme/src/index").default;
      const frontity__wp_source_default = require("@frontity/wp-source/src/index").default;
      const frontity__google_analytics_default = require("@frontity/google-analytics/src/index").default;
      const frontity__google_tag_manager_default = require("@frontity/google-tag-manager/src/index").default;
      const frontity__tiny_router_default = require("@frontity/tiny-router/src/index").default;
      const frontity__html2react_default = require("@frontity/html2react/src/index").default;
      const packages = {
        frontity__twentytwenty_theme_default,
        frontity__wp_source_default,
        frontity__google_analytics_default,
        frontity__google_tag_manager_default,
        frontity__tiny_router_default,
        frontity__html2react_default,
      };
      client({ packages });
    }
  );
}