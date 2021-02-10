import React from 'react';
import { Container, Grid } from 'components';
import Header from 'layouts/partials/Header';

const IndexPage = ({ children }) => {
  return (
    <Container>
      <Header />
      <Grid>
        <Grid.Column>
          <header>
            <h1>Gatsby Theme darsh</h1>
          </header>
          {children}
          <footer>
            <p>Footer</p>
          </footer>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default IndexPage;
