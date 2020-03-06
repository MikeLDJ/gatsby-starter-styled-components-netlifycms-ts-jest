import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

type Props = {
  siteTitle: string;
};

export const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;
StyledHeader.displayName = 'StyledHeader';

const StyledHeaderLinkContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;
StyledHeaderLinkContainer.displayName = 'StyledHeaderLinkContainer';

export const StyledH1 = styled.h1`
  margin: 0;
`;
StyledH1.displayName = 'StyledH1';

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
StyledLink.displayName = 'StyledLink';

const Header: React.FC<Props> = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeaderLinkContainer>
      <StyledH1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </StyledH1>
    </StyledHeaderLinkContainer>
  </StyledHeader>
);

export default Header;
