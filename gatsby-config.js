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
}



exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const nodeData = {
    title: "Test Node",
    description: "Testing the node ",
  }
  const newNode = {
    ...nodeData,
    id: createNodeId("TestNode-testid"),
    internal: {
      type: "TestNode",
      contentDigest: createContentDigest(nodeData),
    },
  }
  actions.createNode(newNode)
}