import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #1a1a1a; /* Dark background color */
  padding: 10px;
`;

export const NavbarList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarItem = styled.li`
  margin-right: 20px; /* Adjust spacing between items */
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #fff; /* Text color */

  &:hover {
    color: ${(props) => props.theme.colors.primaryPink};
  }

  &.active {
    color: ${(props) => props.theme.colors.primaryBlue};
  }

  &.pending {
    color: grey;
  }
`;
