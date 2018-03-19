import React from 'react';
import { render } from 'react-dom';
import { Button } from './components/button'; // import single component
import { Flex, Grid } from './components'; // import from all components
import './app.scss';

const App = () => (
  <Grid className="app-container" container>
    <Grid xs={12}>
      <h1 className="app-title">Component UI &mdash; Simple components for React</h1>
      <h2 className="app-heading">Button</h2>
      <Flex>
        <Button confirm>confirm</Button>
        <Button primary>primary</Button>
        <Button warning>warning</Button>
        <Button>default</Button>
        <Button disabled>disabled</Button>
      </Flex>
    </Grid>
  </Grid>
);

render(<App />, global.document.getElementById('app'));
