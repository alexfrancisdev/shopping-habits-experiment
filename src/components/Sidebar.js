import React from 'react'

import styled from 'styled-components';

const SidebarContent = styled.div`
    width: 200px;
    height: 100%;
    border-right: 1px solid grey;
`

const SidebarList = styled.ul`
    padding-top: 10px;
    list-style-type: none;
`

const SidebarItem = styled.li`
    padding: 5px;
    font-size: 16px;
`

function Sidebar(props) {
    return (
        <SidebarContent>
            <SidebarList>
                <SidebarItem>All Items</SidebarItem>
                <SidebarItem>Fresh Fruit</SidebarItem>
                <SidebarItem>Fresh Vegetables</SidebarItem>
                <SidebarItem>Fresh Salad &amp; Dips</SidebarItem>
                <SidebarItem>Chilled Juice &amp; Smoothies</SidebarItem>
                <SidebarItem>Milk, Butter &amp; Eggs</SidebarItem>
            </SidebarList>
        </SidebarContent>
    )
}

export default Sidebar