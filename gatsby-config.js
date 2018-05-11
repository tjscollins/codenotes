module.exports = {
  siteMetadata: {
    title: 'codenotes Blog',
    description: ''
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `codenotes`,
            path: `${__dirname}/content/codenotes/`,
        },
    },
    // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
            //       name: `notebooks`,
            //       path: `${__dirname}/notebooks/`,
            //     },
            //   },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
            `gatsby-remark-prismjs`,
            ]
        }
    },
    `gatsby-transformer-json`,
  ],
};
