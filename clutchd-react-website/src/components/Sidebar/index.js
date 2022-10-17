import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen= {isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SideBarLink to="about" onClick={toggle}>
                    About
                </SideBarLink>

                <SideBarLink to="discover" onClick={toggle}>
                    Discover
                </SideBarLink>

                <SideBarLink to="services" onClick={toggle}>
                    Services
                </SideBarLink>

                <SideBarLink to="signup" onClick={toggle}>
                    Sign Up
                </SideBarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin"> Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar