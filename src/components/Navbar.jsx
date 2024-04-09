import {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  NavbarLink,
} from './StyledComponents/Navbar.styled';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to={'about-me'}>Karol Pulawski</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={'blog'}>Blog</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
