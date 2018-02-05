module.exports = {
  siteMetadata: {
    title: 'codenotes Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `codenotes`,
        path: `${__dirname}/content/codenotes/`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`
  ],
};
