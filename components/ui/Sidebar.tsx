import { useContext } from "react"

import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import {InboxOutlined, MailOutline} from '@mui/icons-material'
import { UIContext } from "@/context/ui"

const menuItmes = ['Inbox', 'Stared', 'Send email', 'Drafts']

export const Sidebar = () => {
    const {openSideMenu, closeSideBar} = useContext(UIContext)
  return (
    <Drawer
        anchor="left"
        onClose={closeSideBar}
        open={openSideMenu}
    >
        <Box sx={{width: "250px"}}>
            <Box sx={{padding: '5px 10px'}}>
                <Typography variant="h4">Menú</Typography>
            </Box>
                        
            <List>
            {
                menuItmes.map((text, index) => <ListItemButton  key={text}>
                    <ListItemIcon>
                        {index%2 ? <InboxOutlined></InboxOutlined> : <MailOutline></MailOutline>}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItemButton>)
            }
            </List>
            <Divider></Divider>

            <List>
            {
                menuItmes.map((text, index) => <ListItemButton  key={text}>
                    <ListItemIcon>
                        {index%2 ? <InboxOutlined></InboxOutlined> : <MailOutline></MailOutline>}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItemButton>)
            }
            </List>
        </Box>

    </Drawer>
  )
}
