import React from 'react';
import { shallow } from 'enzyme';

import Header from '../header';

describe('Header component', () => {
  it('should render correctly with styled components', () => {
    const props = {
      siteTitle: 'new Gatsby site',
    };
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.find('StyledHeader')).toHaveLength(1);
    expect(wrapper.find('StyledHeaderLinkContainer')).toHaveLength(1);
    expect(wrapper.find('StyledH1')).toHaveLength(1);
    expect(wrapper.find('StyledLink').props().children).toBe(props.siteTitle);
    expect(wrapper.find('StyledLink').prop('to')).toBeTruthy();
  });
});
