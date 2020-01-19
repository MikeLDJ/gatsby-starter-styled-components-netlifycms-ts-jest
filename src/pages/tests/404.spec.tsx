import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../404';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

describe('Page 404', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(SEO).prop('title')).toBe('404: Not found');
    expect(wrapper.find('h1').text()).toBe('NOT FOUND');
    expect(wrapper.find('p').text()).toBe(
      "You just hit a route that doesn't exist... the sadness."
    );
  });
});
