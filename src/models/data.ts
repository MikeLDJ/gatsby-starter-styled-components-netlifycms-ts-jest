import { FluidObject } from 'gatsby-image';

export type Data = {
  placeholderImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
};
