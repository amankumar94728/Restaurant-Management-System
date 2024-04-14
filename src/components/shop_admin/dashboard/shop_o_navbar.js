import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Content from './shop_owner_dashboard';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";

const drawerWidth = 240;
const value = Cookies.get("User-Details");
export default function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h4" noWrap component="div">
            Welcome to {value}'s Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <PrimarySearchAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}/> */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <List>
      {[
        { text: 'Dashboard', link: `/${value}/admin/dashboard` },
        { text: 'Notification', link: `/${value}/admin/dashboard` },
        { text: 'Order', link: `/${value}/admin/dashboard` },
        { text: 'inventory', link: `/${value}/admin/dashboard` },
        { text: 'Users', link: `/${value}/admin/users`},
        { text: 'Add Menu', link: `/${value}/admin/menuitem` },
        { text: 'Feedback', link: `/${value}/admin/dashboard` },
        { text: 'Settings', link: `/${value}/admin/dashboard` },
      ].map((item, index) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton component={Link} to={item.link}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
          {/* <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}