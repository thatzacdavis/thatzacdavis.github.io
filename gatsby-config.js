/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  siteMetadata: {
    title: `thatzacdavis`,
    description: "Personal Site for Zac Davis",
    author: "@thatzacdavis",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss")(tailwindConfig),
          require("autoprefixer"),
          ...(process.env.NODE_ENV === "production"
            ? [require("cssnano")]
            : []),
        ],
      },
    },
  ],
}
