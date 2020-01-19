import React from 'react';
import { shallow } from 'enzyme';

import SecondPage from '../page-2';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Link } from 'gatsby';

describe('Page two', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SecondPage />);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(SEO).prop('title')).toBe('Page two');
    expect(wrapper.find('h1').text()).toBe('Hi from the second page');
    expect(wrapper.find('p').text()).toBe('Welcome to page 2');
    expect(wrapper.find(Link).prop('to')).toBe('/');
  });
});
