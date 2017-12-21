import React from 'react';
import graphql from 'graphql';
import Link from 'gatsby-link';

import Container from '../ui/Container/Container';
import Card from '../ui/Card/Card';

const IndexPage = ({ data }) => {
  const fields = { ...data.allContentfulHomepage.edges[0].node };

  return (
    <div>
      <h1>{fields.title}</h1>
      <p className="c-p -large">{fields.opener}</p>
      <p>
        <Link to={fields.action.url}>{fields.action.text}</Link>
      </p>

      <hr />

      <h2>Content dump</h2>
      <Container size="small">
        {fields.posts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            subtitle={post.createdAt}
            link={`blog/${post.slug}`}
            emoji={post.emoji}
          />
        ))}
      </Container>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    allContentfulHomepage {
      edges {
        node {
          id
          title
          opener
          action {
            id
            text
            url
          }
          posts {
            id
            createdAt
            slug
            title
            emoji
            body {
              id
              childMarkdownRemark {
                id
                html
              }
            }
          }
        }
      }
    }
  }
`;
