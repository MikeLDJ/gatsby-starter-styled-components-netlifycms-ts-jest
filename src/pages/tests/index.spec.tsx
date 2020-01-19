import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'gatsby';

import IndexPage from '../index';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Image from '../../components/image';

describe('Index page', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<IndexPage />);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(SEO).prop('title')).toBe('Home');
    expect(wrapper.find('h1').text()).toBe('Hi people');
    expect(
      wrapper
        .find('p')
        .at(0)
        .text()
    ).toBe('Welcome to your new Gatsby site.');
    expect(
      wrapper
        .find('p')
        .at(1)
        .text()
    ).toBe('Now go build something great.');
    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(Link).prop('to')).toBe('/page-2/');
    expect(
      wrapper
        .find(Link)
        .children()
        .text()
    ).toBe('Go to page 2');
  });
});
