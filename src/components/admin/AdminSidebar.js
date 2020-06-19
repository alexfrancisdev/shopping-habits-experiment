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

function AdminSidebar(props) {
    return (
        <SidebarContent>
            <SidebarList>
                <SidebarItem>Products</SidebarItem>
                <SidebarItem>Users</SidebarItem>
            </SidebarList>
        </SidebarContent>
    )
}

export default AdminSidebar