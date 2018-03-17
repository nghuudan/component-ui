# component-ui
Simple components for React

## Install with NPM
`npm install --save component-ui`

## Components

### Button
| Property    | Type       | Description
| ----------- | ---------- | ----------------------------------------
| `className` | `string`   | CSS class passed into the button element
| `click`     | `function` | Click event handler passed to the button
| `disabled`  | `boolean`  | Disables the button
| `primary`   | `boolean`  | Applies primary styles to the button
| `submit`    | `boolean`  | Button will submit when placed in forms
| `warning`   | `boolean`  | Applies warning styles to the button
```
import React from 'react';
import { Button } from 'component-ui';

const ButtonExamples = (props) => (
  <div>
    <Button className="button-example">Button with className</Button>
    <Button click={props.click}>Button with click handler</Button>
    <Button disabled>Disabled</Button>
    <Button primary>Primary</Button>
    <Button submit>Submit</Button>
    <Button warning>Warning</Button>
  </div>
);
```

### Flex
| Property    | Type       | Description
| ----------- | ---------- | ----------------------------------------
| `align`     | `string`   | Aligns the children within the component
| `basis`     | `number`   | Percent of the parent Flex used for size
| `className` | `string`   | CSS class passed into the button element
| `grow`      | `boolean`  | Fills the space available in the parent
| `layout`    | `string`   | Direction to layout the children within
| `overflow`  | `boolean`  | Allows scrolling of overflowing content
| `shrink`    | `boolean`  | Shrinks to allow siblings to fit parent
```
import React from 'react';
import { Flex } from 'component-ui';

/*
align:
  start    | start-{center, end, around, between}
  center   | center-{start, end, around, between}
  end      | end-{start, center, around, between}
  stretch  | stretch-{start, center, end, around, between}
  baseline | baseline-{start, center, end, around, between}
*/
const FlexExamples = () => (
  <Flex align="start-center" className="flex-example" layout="row">
    <Flex align="stretch-start" basis={50} layout="column">
      <p>Content</p>
    </Flex>
    <Flex align="center-end" grow layout="column">
      <p>Content</p>
    </Flex>
    <Flex align="center-start" layout="column" overflow shrink>
      <p>Content</p>
    </Flex>
  </Flex>
);
```

### Grid
| Property    | Type       | Description
| ----------- | ---------- | ----------------------------------------
| `className` | `string`   | CSS class passed into the button element
| `container` | `boolean`  | Becomes a container for Grid components
| `xs`        | `number`   | Grid size (1-12) for Extra Small screens
| `sm`        | `number`   | Grid size (1-12) for Small screens
| `md`        | `number`   | Grid size (1-12) for Medium screens
| `lg`        | `number`   | Grid size (1-12) for Large screens
| `xl`        | `number`   | Grid size (1-12) for Extra Large screens
```
import React from 'react';
import { Grid } from 'component-ui';

const GridExamples = () => (
  <Grid className="grid-example" container>
    <Grid xs={12} sm={6} md={4}>
      <p>Content</p>
    </Grid>
    <Grid xs={12} sm={6} md={4}>
      <p>Content</p>
    </Grid>
    <Grid xs={12} sm={6} md={4}>
      <p>Content</p>
    </Grid>
  </Grid>
);
```
