module.exports = {
  siteMetadata: {
    title: 'codenotes Blog',
    description: '',
    keywords: [
        'programming',
        'computer science'
    ],
    links: {
        github: 'https://github.com/tjscollins',
        linkedin: 'https://linkedin.com/in/tjscollins',
    }
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
