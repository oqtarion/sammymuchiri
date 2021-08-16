module.exports = {
  siteMetadata: {
    logo: `sm.`,
    title: `Sammy Muchiri`,
    description: `Digital Designer & Developer`,
    author: `@sammymuchiry`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sammy muchiri`,
        short_name: `sm`,
        start_url: `/`,
        background_color: `#07080d`,
        theme_color: `#ff0054`,
        display: `minimal-ui`,
        icon: `src/images/logo/sm.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/projects/*`],
      },
    },
  ],
}
