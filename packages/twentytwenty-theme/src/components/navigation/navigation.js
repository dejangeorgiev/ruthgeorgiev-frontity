import React from "react";
import {connect, styled} from "frontity";
import Link from "../link";
import tw from 'tailwind.macro'

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navigation = ({state}) => (
    <NavWrapper>
        <MenuNav>
            <Menu>
                {state.theme.menu.map(([name, link]) => {
                    // Check if the link matched the current page url
                    const isCurrentPage = state.router.link === link;

                    return (
                        <MenuItem key={name}>
                            {/* If link url is the current page, add `aria-current` for a11y */}
                            <MenuLink
                                link={link}
                                aria-current={isCurrentPage ? "page" : undefined}
                            >
                                {name}
                            </MenuLink>
                        </MenuItem>
                    );
                })}
            </Menu>
        </MenuNav>
    </NavWrapper>
);

export default connect(Navigation);

const NavWrapper = styled.div`${tw`w-full text-gray-700`}`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

const Menu = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;

  @media (min-width: 1220px) {
    margin-top: -0.8rem;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -2.5rem;
  }
`;

const MenuItem = styled.li`
  font-size: inherit;
  line-height: 1.25;
  position: relative;
  margin: 0.8rem 0 0 1.6rem !important;

  @media (min-width: 1220px) {
    margin: 0.8rem 0 0 2.5rem !important;
  }
`;

const MenuLink = styled(Link)`${tw`px-4 py-4 mt-2 text-gray-800 font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
 text-decoration: none;
  &[aria-current="page"] {
  
  ${tw`text-gray-900 bg-gray-200`}

  }
`;

