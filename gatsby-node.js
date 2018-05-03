/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');
const crypto = require('crypto');

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

//   if (node.extension === 'ipynb') {
//     if (node.relativeDirectory.match(/^\..+/) ||
//         node.base.match(/^\..*/)) return;
//     const content = await loadNodeContent(node);
//     const data = JSON.parse(content);
//     const slug = data.metadata.frontmatter.path;

//     const ipynbNode = {
//         id: `${node.id} >>> ipynb`,
//         children: [],
//         parent: node.id,
//         internal: {
//             type: 'ipynb',
//         },
//         slug,
//         content,
//         fileAbsolutePath: node.absolutePath
//     };

//     ipynbNode.internal.contentDigest = crypto
//       .createHash('md5')
//       .update(JSON.stringify(ipynbNode))
//       .digest('hex')

//     console.log('Notebook: ',ipynbNode);
//     createNode(ipynbNode)
//     createParentChildLink({ parent: node, child: ipynbNode })
//   }
};

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