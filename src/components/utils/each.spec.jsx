import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import Each from './each';

describe('Each', () => {
  const Item = ({ id }) => <p>{id}</p>;

  Item.defaultProps = {
    id: 0,
  };

  Item.propTypes = {
    id: PropTypes.number,
  };

  const items = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  it('should render a component for each item in items', () => {
    const wrapper = mount(<Each items={items} component={Item} />);
    expect(wrapper.find(Item)).toHaveLength(3);
  });

  it('should only render components when the items are an Array', () => {
    const wrapper = mount(<Each items="test" component={Item} />);
    expect(wrapper.find(Item)).toHaveLength(0);
  });
});
