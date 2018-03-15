import React from 'react';
import { render } from 'react-dom';
import { Flex, Grid } from './src';
import './app.scss';

const App = () => (
  <Grid className="app-container" container>
    <Grid container sm={12}>
      <Grid md={6}>
        <h1>Component UI - Simple components for React</h1>
      </Grid>
      <Grid md={6}>
        <h1>Grid</h1>
      </Grid>
    </Grid>
    <Grid sm={6}>
      <h2>Grid</h2>
    </Grid>
    <Grid sm={6}>
      <h2>Grid</h2>
    </Grid>
    <Grid sm={4}>
      <h2>Grid</h2>
    </Grid>
    <Grid sm={8}>
      <Flex align="stretch-start" grow layout="column" shrink>
        <Flex align="start">
          <h3>Flex</h3>
        </Flex>
        <Flex align="center">
          <h3>Flex</h3>
        </Flex>
        <Flex align="end">
          <h3>Flex</h3>
        </Flex>
        <Flex>
          <Flex basis={50}>
            <h4>Flex</h4>
          </Flex>
          <Flex basis={50}>
            <h4>Flex</h4>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  </Grid>
);

render(<App />, global.document.getElementById('app'));
