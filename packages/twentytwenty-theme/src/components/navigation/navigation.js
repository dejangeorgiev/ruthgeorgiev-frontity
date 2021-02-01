import React from "react";
import {connect, styled} from "frontity";
import Link from "../link";
import tw from 'tailwind.macro'
import {returnStatement} from "@babel/types";


const Menu = ({options, currentPageLink, submenu}) => (
    <StyledMenu submenu={submenu}>
        {options.map(({name, href, submenu}) => {
            // Check if the link matched the current page url
            const isCurrentPage = currentPageLink === href;
            return (
                <MenuItem key={name}>
                    {/* If link url is the current page, add `aria-current` for a11y */}
                    <MenuLink
                        link={href}
                        aria-current={isCurrentPage ? "page" : undefined}
                    >
                        {name}
                    </MenuLink>
                    {submenu && <Menu options={submenu} currentPageLink={currentPageLink} submenu/>}
                </MenuItem>
            );
        })}
    </StyledMenu>
);

const DynamicMenu = ({items,currentPageLink,submenu}) => {
    return (
        <StyledMenu submenu={submenu}>
            {items.map((item) => {
                if (!item.child_items) {
                    return (
                        <MenuItem key={item.ID}>
                            <MenuLink link={item.url}>
                                {item.title}
                            </MenuLink>
                        </MenuItem>
                    )
                }
            })}
        </StyledMenu>
    )
};

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navigation = ({state}) => {
    const menuItems = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

    return (
        <NavWrapper>
            <MenuNav>
                <DynamicMenu items={menuItems} currentPageLink={state.router.link}/>

                {/** <Menu options={state.theme.menu} currentPageLink={state.router.link}/> */}
            </MenuNav>
        </NavWrapper>
    )
};

export default connect(Navigation);

const MenuItem = styled.li`
  position: relative;
`;


const MenuLink = styled(Link)`${tw`block px-4 py-4 text-gray-800 font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
 text-decoration: none;
  &[aria-current="page"] {
  ${tw`text-gray-900 bg-gray-200`}
  }
`;

const StyledMenu = styled.ul`
 ${tw`flex flex-wrap justify-end list-none`};
  flex-direction: ${({submenu}) => submenu && 'column'};
  visibility: ${({submenu}) => submenu && 'hidden'};
  position: ${({submenu}) => submenu && 'absolute'};
  width: ${({submenu}) => submenu && '200px'};
 
  ${MenuItem}:hover & {
    visibility: ${({submenu}) => submenu && 'visible'};
      ${tw`bg-white rounded-md shadow`};
      ${MenuLink}{
        ${tw`block px-4 py-4 mb-4 bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`};
      }
  }

  @media (min-width: 1220px) {
    margin-top: ${({submenu}) => submenu ? '10px' : '-0.8rem'}; ;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -2.5rem;
  }
`;

const NavWrapper = styled.div`${tw`w-full text-gray-700`}`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1600px) {
    display: block;
    width: 100%;
  }
`;



