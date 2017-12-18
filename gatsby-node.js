/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const pageQuery = `
  query PageQuery {
    allContentfulPage {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
  `

  return new Promise((resolve, reject) => {
    const templates = {
      // post: path.resolve(`src/layouts/post.js`),
      page: path.resolve(`src/layouts/Page/Page.js`),
    };

    resolve(graphql(pageQuery).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const pages = result.data.allContentfulPage.edges;

      // Create pages for each markdown file.
      pages.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: templates.page,
          context: node,
        });
      });
    }));
  });
};
