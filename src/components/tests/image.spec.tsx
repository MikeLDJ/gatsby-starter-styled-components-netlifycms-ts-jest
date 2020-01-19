import React from 'react';
import * as Gatsby from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { shallow } from 'enzyme';

import Image from '../image';
import { Data } from '../../models/data';

describe('Image', () => {
  let data: Data;
  let useStaticQuery;
  let fluid: FluidObject;

  beforeEach(() => {
    fluid = {
      aspectRatio: 0,
      src: 'string',
      srcSet: 'string',
      sizes: 'string',
    };
    data = {
      placeholderImage: {
        childImageSharp: {
          fluid,
        },
      },
    } as Data;

    useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => data);
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Image />);

    expect(wrapper.find(Img)).toHaveLength(1);
    expect(wrapper.find(Img).prop('fluid')).toEqual(
      data.placeholderImage.childImageSharp.fluid
    );
  });
});
