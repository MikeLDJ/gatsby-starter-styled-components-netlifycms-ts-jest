import React from 'react';
import * as Gatsby from 'gatsby';
import { shallow } from 'enzyme';

import Layout, { Props } from '../layout';
import Header from '../header';
import { Data } from '../../models/data';

describe('Layout', () => {
  let props: Props;
  let data: Data;
  let useStaticQuery;

  beforeEach(() => {
    props = {
      children: {},
    };
    data = {
      site: {
        siteMetadata: {
          title: 'test title',
        },
      },
    } as Data;

    useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => data);
  });

  it('should render main and correctly pass children', () => {
    const wrapper = shallow(<Layout {...props} />);

    expect(wrapper.find('main')).toEqual(props.children);
  });

  it('should render Header component with proper siteTitle', () => {
    const wrapper = shallow(<Layout {...props} />);

    expect(wrapper.find(Header).prop('siteTitle')).toEqual(
      data.site.siteMetadata.title
    );
  });

  it('should render footer with anchor to Gatsby site', () => {
    const wrapper = shallow(<Layout {...props} />);

    expect(wrapper.find('footer').find('a')).toHaveLength(1);
    expect(wrapper.find('a').prop('href')).toBe('https://www.gatsbyjs.org');
    expect(wrapper.find('a').text()).toBe('Gatsby');
  });
});
