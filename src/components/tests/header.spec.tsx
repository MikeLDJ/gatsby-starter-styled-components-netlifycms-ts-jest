import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'gatsby';

import Header from '../header';

describe('Header component', () => {
  it('should render correctly', () => {
    const props = {
      siteTitle: 'new Gatsby site',
    };
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find(Link).props().children).toBe(props.siteTitle);
  });
});
