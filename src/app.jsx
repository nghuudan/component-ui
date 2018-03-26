import React from 'react';
import { render } from 'react-dom';
import { Button } from '../dist/button'; // import single component
import {
  Each,
  Flex,
  Grid,
  Spinner,
  Toggle,
  When,
} from '../dist'; // import from all components

import './app.scss';

const buttons = [
  { children: 'confirm', confirm: true },
  { children: 'primary', primary: true },
  { children: 'warning', warning: true },
  { children: 'default' },
  { children: 'disabled', disabled: true },
];

const pets = [
  { children: 'Bird', xs: 4 },
  { children: 'Cat', xs: 4 },
  { children: 'Dog', xs: 4 },
];

const App = () => (
  <Grid className="app-container" container>
    <Grid xs={12}>
      <h1 className="app-title">Component UI &mdash; Simple components for React</h1>

      <h2 className="app-heading">Button</h2>
      <Each items={buttons} component={Button} />

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

    <Grid xs={12} md={6} lg={3}>
      <h2 className="app-heading">Spinner</h2>
      <Spinner className="app-spinner-example" />
    </Grid>

    <Grid xs={12} md={6} lg={3}>
      <h2 className="app-heading">Toggle</h2>
      <Toggle className="app-toggle-example" name="toggle" />
    </Grid>

    <Grid xs={12} md={6} lg={3}>
      <Grid xs={12}>
        <h2 className="app-heading">Each</h2>
      </Grid>
      <Grid container xs={12}>
        <Each items={pets} component={Grid} />
      </Grid>
    </Grid>

    <Grid xs={12} md={6} lg={3}>
      <h2 className="app-heading">When</h2>
      <When is={new Date().getSeconds() % 2 === 0}>
        <p>This text will show on even seconds.</p>
      </When>
      <When is={new Date().getSeconds() % 2 !== 0}>
        <p>This text will show on odd seconds.</p>
      </When>
    </Grid>
  </Grid>
);

render(<App />, global.document.getElementById('app'));
