const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Tony D'Addeo",
    description: "A place to put interesting things I do or encounter",
    author: "@adaddeo",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: 'Caveat',
              variants: ['700'],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.join(__dirname, "src", "posts"),
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-classes",
            options: {
              classMap: {
                "list[ordered=true]": "list-decimal list-inside ml-3 mb-3",
                "list[ordered=false]": "list-disc list-inside ml-3 mb-3",
                listItem: "mb-1",
              },
            },
          },
          "gatsby-plugin-catch-links",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160232666-1",
      },
    },
   "gatsby-plugin-netlify"
  ],
}
