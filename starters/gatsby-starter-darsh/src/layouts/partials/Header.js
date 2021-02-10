import React from 'react';
import { Grid } from 'components';
import styles from './Partials.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Grid>
        <Grid.Column>
          <header>
            <h1>Gatsby Theme darsh</h1>
          </header>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Header;
