/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

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
          body
        }
      }
    }
  }
  `

  return new Promise((resolve, reject) => {
    const templates = {
      post: path.resolve(`src/layouts/post.js`),
      page: path.resolve(`src/layouts/index.js`),
    };

    resolve(graphql(pageQuery).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const pages = result.data.allContentfulLandingPage.edges;

        // Create pages for each markdown file.
        pages.forEach(({ node }) => {

          createPage({
            path: node.slug,
            component: templates.page,
            context: node,
          });
        });
      })
    );
  });
};
