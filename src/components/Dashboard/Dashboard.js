import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useState} from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import RouterIcon from '@mui/icons-material/Router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router';
import { Switch, Route} from 'react-router-dom';
import Create from './Create/Create';
import Accounts from './Accounts/Accounts';
import Endpoints from './Endpoints/Endpoints';
import Guide from './Guide/Guide';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    const name=useState('Riddham')[0];
    const history=useHistory();
    const menuItems=[
        {
            text:'Create database',
            icon:<StorageIcon/>,
            path:'/dashboard/create'
        },
        {
            text:'Get Endpoints',
            icon:<RouterIcon/>,
            path:'/dashboard/endpoints'
        },
        {
            text:'Accounts',
            icon:<AccountCircleIcon/>,
            path:'/dashboard/accounts'
        },
        {
            text:'Logout',
            icon:<LogoutIcon/>,
            path:'/dashboard/logout'
        },
    ]



  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {name}'s Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
            <h3>{name}</h3>
        </Toolbar>
        <Divider />
        <List>
          {
              menuItems.map((item)=>(
                <ListItemButton key={item.text} button onClick={()=>history.push(item.path)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
              )
              )
          }
        </List>
      </Drawer>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Switch>
        <Route exact path='/dashboard/' component={Guide}/>
        <Route exact path='/dashboard/endpoints' component={Endpoints}/>
        <Route exact path='/dashboard/create'  component={Create}/>
        <Route exact path='/dashboard/accounts' component={Accounts} />
        <Route exact path='/dashboard/logout'  />
        </Switch>
      </Box>
    </Box>
    
  );
}
