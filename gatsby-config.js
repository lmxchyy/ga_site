/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],
}
module.exports = {
  siteMetadata: {
    title: "My Cool Website-akdiving",
    author: "lmxchyy"
  },
  plugins: ["gatsby-plugin-sitemap"],
}

module.exports = {
  siteMetadata: {
    title: "My Cool Website-diving",
    author: "lmxchyy"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/sitemap`,
      },
    },
  ],

  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-remark`
  ],

  // plugins: [
  //   {
  //     resolve: `gatsby-transformer-remark`,
  //     options: {
  //       // Footnotes mode (default: true)
  //       footnotes: true,
  //       // GitHub Flavored Markdown mode (default: true)
  //       gfm: true,
  //       // Plugins configs
  //       plugins: [],
  //     },
  //   },
    
  // ],
}


