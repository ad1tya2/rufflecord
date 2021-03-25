require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
     siteTitle: `RuffleCord`,
    // Default title of the page
    // Can be used for e.g. JSONLD
    siteHeadline: `RuffleCord`,
    // Will be used to generate absolute URLs for og:image etc.
    // Used for SEO
    siteDescription: `RuffleCord's website :D`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `ad1tya2`,
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `RuffleCord`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
//     {
//       resolve: `gatsby-plugin-google-analytics`,
//       options: {
//         trackingId: process.env.GOOGLE_ANALYTICS_ID,
//       },
//     },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RuffleCord - A hub for development`,
        short_name: `RuffleCord`,
        description: `Here at RuffleCord We offer development services for discord bots, websites and minecraft servers`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
