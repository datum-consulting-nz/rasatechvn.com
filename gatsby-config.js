module.exports = {
  siteMetadata: {
    title: `RasaTech`,
    description: `Accessible farming technology to everyone`,
    author: `@mechatroNick`,
    langs: ['en-US','vi-VN'],
    defaultLangKey: "en-US"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/src/svg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `RasaTech`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8w4t9y93zq6c`,
        accessToken: `c8TXpohxo8L7iEZjbvnlxWANEaeqBsfXWcCbh1g2rq8`,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en-US',
        prefixDefault: true,
        useLangKeyLayout: false
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`700`],
            subsets: [`vietnamese`],
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`, `700`],
            subsets: [`vietnamese`],
          },
        ],
      },
    }
  ],
};
