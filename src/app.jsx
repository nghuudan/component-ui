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
      <Button confirm>confirm</Button>
      <Button primary>primary</Button>
      <Button warning>warning</Button>
      <Button>default</Button>
      <Button disabled>disabled</Button>

      <h2 className="app-heading">Flex</h2>
      <Flex align="stretch-start" className="app-flex-example" wrap>
        <Flex basis={55}>
          <p>basis=55</p>
        </Flex>
        <Flex align="end" basis={45}>
          <p>align=end, basis=45</p>
        </Flex>
        <Flex align="stretch-start" grow layout="column" shrink>
          <p>align=stretch-start, grow, layout=column</p>
          <Flex align="center-around" layout="row">
            <p>align=center-around, layout=row</p>
            <p>content</p>
            <p>content</p>
          </Flex>
          <Flex align="stretch-start" layout="row">
            <Flex align="center-between" basis={66}>
              <p>align=center-between, basis=66</p>
              <p>content</p>
            </Flex>
            <Flex basis={33} layout="column">
              <p>basis=33, layout=column</p>
              <p>content</p>
            </Flex>
          </Flex>
          <Flex align="center" layout="column">
            <p>align=center, layout=column</p>
            <p>content</p>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  </Grid>
);

render(<App />, global.document.getElementById('app'));
