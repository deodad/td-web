const path = require('path')

module.exports = {
  siteMetadata: {
    title: "Tony D'Addeo",
    description: "Tony's homepage",
    author: '@adaddeo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, 'src', 'posts')
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                'list[ordered=true]': 'list-decimal list-inside',
                'list[ordered=false]': 'list-disc list-inside',
                'listItem': 'mb-3',
              }
            }
          },
          'gatsby-plugin-catch-links'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss'
  ],
}
