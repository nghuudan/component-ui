import React from 'react';
import { render } from 'react-dom';
import { Button, Flex, Grid } from './src';
import './app.scss';

const App = () => (
  <Grid className="app-container" container>
    <Grid md={12}>
      <h1>Component UI - Simple components for React</h1>
    </Grid>
    <Grid md={12}>
      <h2>Button</h2>
      <Button primary>Primary</Button>
      <Button warning>Warning</Button>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </Grid>
    <Grid container md={12}>
      <Grid md={12}>
        <h2>Flex</h2>
      </Grid>
      <Grid md={2}>
        <Flex align="start" layout="row">
          <h3>start</h3>
        </Flex>
      </Grid>
      <Grid md={2}>
        <Flex align="start-center" layout="row">
          <h3>start-center</h3>
        </Flex>
      </Grid>
      <Grid md={2}>
        <Flex align="start-end" layout="row">
          <h3>start-end</h3>
        </Flex>
      </Grid>
      <Grid md={3}>
        <Flex align="start-around" layout="row">
          <h3>start-around</h3>
          <h3>start-around</h3>
        </Flex>
      </Grid>
      <Grid md={3}>
        <Flex align="start-between" layout="row">
          <h3>start-between</h3>
          <h3>start-between</h3>
        </Flex>
      </Grid>
    </Grid>
  </Grid>
);

render(<App />, global.document.getElementById('app'));
