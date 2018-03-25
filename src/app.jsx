import React from 'react';
import { render } from 'react-dom';
import { Button } from '../dist/button'; // import single component
import { Flex, Grid, Spinner } from '../dist'; // import from all components
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
          <Flex align="center-around" layout="row" show="gt-md">
            <p>align=center-around, layout=row, show=gt-md</p>
            <p>content</p>
            <p>content</p>
          </Flex>
          <Flex align="stretch-start" layout="row" show="gt-sm">
            <Flex align="center-between" basis={66}>
              <p>align=center-between, basis=66, show=gt-sm</p>
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

    <h2 className="app-heading">Grid</h2>
    <Grid className="app-grid-example" container xs={12}>
      <Grid xs={6} sm={12} md={2} lg={1}>
        <p>xs=6, sm=12, md=2, lg=1</p>
      </Grid>
      <Grid xs={6} sm={8} md={4} lg={4}>
        <p>xs=6, sm=8, md=4, lg=4</p>
      </Grid>
      <Grid xs={12} sm={4} md={6} lg={7}>
        <p>xs=12, sm=4, md=6, lg=7</p>
      </Grid>
    </Grid>

    <h2 className="app-heading">Spinner</h2>
    <Grid xs={12}>
      <Spinner className="app-spinner-example" />
    </Grid>
  </Grid>
);

render(<App />, global.document.getElementById('app'));
