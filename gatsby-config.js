module.exports = {
  siteMetadata: {
    title: `Rowan Weismiller — Frontend Developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `06gqdoo3hu2p`,
        accessToken: `e29e422b90fb247049c9cd812bca9c0276dd28c1dde7bff00d3b104c20f8576f`,
        host: `preview.contentful.com`,
      },
    },
  ],
}
