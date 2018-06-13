/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');
const fm = require('./front-matter')
const fs = require(`fs-extra`)

exports.onCreateNode = async ({ node, getNode, boundActionCreators, loadNodeContent }) => {
  const { createNodeField, createNode, createParentChildLink } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};


exports.onCreatePage = async function({page}) {
	const {attributes: {layout}} = fm(await fs.readFile(page.component, 'utf8'))
	page.layout = layout || 'index';
}

exports.createPages = async({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/codenotes.tsx`),
                    context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.fields.slug,
                    },
                });
            });
            resolve();
        })
    });
}

exports.modifyBabelrc = ({ babelrc }) => ({
    ...babelrc,
    plugins: babelrc.plugins.concat(['transform-regenerator']),
  })