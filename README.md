# component-ui
Simple components for React. Bring your own CSS reset.

- [Button](#button)
- [Flex](#flex)
- [Grid](#grid)
- [Utils](#utils)
  - [Each](#each)
  - [When](#when)

## Install with NPM
`npm install --save component-ui`

## Import or include the CSS

### CSS
```css
@import '/your/path/to/component-ui/dist/index.css';
```

### HTML
```html
<link rel="stylesheet" href="/your/path/to/component-ui/dist/index.css">
```

## Components

### Button
| Property    | Type       | Description
| ----------- | ---------- | ----------------------------------------
| `className` | `String`   | CSS class passed into the button element
| `click`     | `Function` | Click event handler passed to the button
| `disabled`  | `Boolean`  | Disables the button
| `primary`   | `Boolean`  | Applies primary styles to the button
| `submit`    | `Boolean`  | Button will submit when placed in forms
| `warning`   | `Boolean`  | Applies warning styles to the button
```javascript
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
| `align`     | `String`   | Aligns the children within the component
| `basis`     | `Number`   | Percent of the parent Flex used for size
| `className` | `String`   | CSS class passed into the button element
| `grow`      | `Boolean`  | Fills the space available in the parent
| `hidden`    | `Boolean`  | Hides the component (display: none)
| `hide`      | `String`   | Hides the component for the screen size
| `hideXs`    | `Boolean`  | Hidden for Extra Small screens and up
| `hideSm`    | `Boolean`  | Hidden for Small screens and up
| `hideMd`    | `Boolean`  | Hidden for Medium screens and up
| `hideLg`    | `Boolean`  | Hidden for Large screens and up
| `hideXl`    | `Boolean`  | Hidden for Extra Large screens and up
| `layout`    | `String`   | Direction to layout the children within
| `overflow`  | `Boolean`  | Allows scrolling of overflowing content
| `shrink`    | `Boolean`  | Shrinks to allow siblings to fit parent
```javascript
import React from 'react';
import { Flex } from 'component-ui';

/*
align:
  start    | start-{center, end, around, between}
  center   | center-{start, end, around, between}
  end      | end-{start, center, around, between}
  stretch  | stretch-{start, center, end, around, between}
  baseline | baseline-{start, center, end, around, between}
hide:
  xs, gt-xs, lt-xs | extra small, greater than, less than
  sm, gt-sm, lt-sm
  md, gt-md, lt-md
  lg, gt-lg, lt-lg
  xl, gt-xl, lt-xl
*/
const FlexExamples = () => (
  <Flex align="start-center" className="flex-example" layout="row">
    <Flex align="stretch-start" basis={50} hide="gt-md" layout="column">
      <p>Content</p>
    </Flex>
    <Flex align="center-end" grow hideLg layout="column">
      <p>Content</p>
    </Flex>
    <Flex align="center-start" layout="column" overflow shrink>
      <p>Content</p>
    </Flex>
    <Flex align="end" hidden layout="column" overflow shrink>
      <p>Content</p>
    </Flex>
  </Flex>
);
```

### Grid
| Property    | Type       | Description
| ----------- | ---------- | ----------------------------------------
| `className` | `String`   | CSS class passed into the button element
| `container` | `Boolean`  | Becomes a container for Grid components
| `hidden`    | `Boolean`  | Hides the component (display: none)
| `hide`      | `String`   | Hides the component for the screen size
| `hideXs`    | `Boolean`  | Hidden for Extra Small screens and up
| `hideSm`    | `Boolean`  | Hidden for Small screens and up
| `hideMd`    | `Boolean`  | Hidden for Medium screens and up
| `hideLg`    | `Boolean`  | Hidden for Large screens and up
| `hideXl`    | `Boolean`  | Hidden for Extra Large screens and up
| `xs`        | `Number`   | Grid size (1-12) for Extra Small screens
| `sm`        | `Number`   | Grid size (1-12) for Small screens
| `md`        | `Number`   | Grid size (1-12) for Medium screens
| `lg`        | `Number`   | Grid size (1-12) for Large screens
| `xl`        | `Number`   | Grid size (1-12) for Extra Large screens
```javascript
import React from 'react';
import { Grid } from 'component-ui';

/*
hide:
  xs, gt-xs, lt-xs - extra small, greater than, less than
  sm, gt-sm, lt-sm
  md, gt-md, lt-md
  lg, gt-lg, lt-lg
  xl, gt-xl, lt-xl
*/
const GridExamples = () => (
  <Grid className="grid-example" container>
    <Grid hide="lt-md" xs={12} sm={6} md={4}>
      <p>Content</p>
    </Grid>
    <Grid hideMd xs={12} sm={6} md={4}>
      <p>Content</p>
    </Grid>
    <Grid hidden xs={12} sm={6} md={4}>
      <p>Content</p>
    </Grid>
  </Grid>
);
```

### Utils

#### Each
| Property    | Type        | Description
| ----------- | ----------- | ---------------------------------------
| `items`     | `Array`     | Array of objects to map to components
| `component` | `Component` | Component to render for each item
```javascript
import React from 'react';
import { Each } from 'component-ui';

const items = [
  {
    name: 'Pasta'
  },
  {
    name: 'Pizza'
  }
];

const Item = (props) => <li>{props.name}</li>;

const EachExample = () => (
  <ul>
    <Each items={items} component={Item} />
  </ul>
);
```

#### When
| Property    | Type        | Description
| ----------- | ----------- | ---------------------------------------
| `is`        | `Boolean`   | Renders the children if value is truthy
```javascript
import React from 'react';
import { When } from 'component-ui';

const WhenExample = (props) => (
  <When is={props.isExampleReady}>
    <p>Content is rendered</p>
  </When>
);
```
