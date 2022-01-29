require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: ``,
    description: `Bitcoin, Blockchain und Kryptowährungen einfach erklärt`,
    author: `@bitlingo`,
  },
  plugins: [
    "gatsby-plugin-antd",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
        modifyVars: {
          "primary-color": "#f7931a",
        },
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],

        web: [
          {
            file: "https://fonts.googleapis.com/css2?family=PT+Serif&display=swap",
            name: "PT Serif",
          },
        ],
        custom: [
          {
            name: "Inter",
            file: "/fonts/fonts.css",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
