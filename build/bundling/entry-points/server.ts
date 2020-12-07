import server from "@frontity/core/src/server";
import frontity__twentytwenty_theme_default from "@frontity/twentytwenty-theme/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__google_analytics_default from "@frontity/google-analytics/src/index";
import frontity__google_tag_manager_analytics_default from "@frontity/google-tag-manager-analytics/src/index";
import frontity__google_ad_manager_default from "@frontity/google-ad-manager/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";
import frontity_contact_form_7_default from "frontity-contact-form-7/src/index";
import frontity__yoast_default from "@frontity/yoast/src/index";
import frontity__wp_comments_default from "@frontity/wp-comments/src/index";

const packages = {
  frontity__twentytwenty_theme_default,
  frontity__wp_source_default,
  frontity__google_analytics_default,
  frontity__google_tag_manager_analytics_default,
  frontity__google_ad_manager_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
  frontity_contact_form_7_default,
  frontity__yoast_default,
  frontity__wp_comments_default,
};

export default server({ packages });

