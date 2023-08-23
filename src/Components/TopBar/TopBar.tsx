import { AppBar,
  Toolbar,
  IconButton,
  Button,
  
  Stack,
  InputBase,
  Menu,
  MenuItem,
  Avatar,
  Box
  
 } from "@mui/material"
 import { useState } from "react";

import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';

export const TopBar = () => {
  const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () =>{
    setAnchorEl(null)
  } 
  const open = Boolean(anchorEl)
  return ( 
    <AppBar   sx={{height:"100%",bgcolor:"red"}}  position="static">
      <Toolbar  sx={{alignItems:"flex-start"
       ,bgcolor: '#212121',
       "justify-content":"flex-end",
       height:"100%"
       

        }} >
        <Box sx={{justifyContent:"space-between" ,display: "flex" , width: "100%" }}>
        <Box >
            <Stack direction="row">
              <Button>
                Store

              </Button>
              <Button>
                Library

              </Button>
              <Button color="secondary">
                Community
              </Button>

            </Stack>
          </Box>

         <Box   sx={{height:"2vh"}} flexDirection="column" >
          <Stack sx={{borderRadius:"10vw", width:"40vw" ,bgcolor:
           '#bbdefb', p: 1,
           height:"70%",
           marginBottom:"4vh",
           marginTop:"2vh"

          }}
           alignItems="center" direction="row">
            <SearchIcon color="success"/>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search'}}
              sx={{ width: '100%', }}
            />
          </Stack>
          <Stack height="30%" justifyContent="flex-end" alignItems="center" direction="row">
          <Menu open={open}
           anchorEl={anchorEl}
            id="shortcut-bar"
            MenuListProps={{
              "aria-labelledby":"shortcut-bar-button"
            }}
            onClose={handleClose}
          >
            <MenuItem>User Profile</MenuItem>
            <MenuItem>Content List</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Guide & Help</MenuItem>
            <MenuItem>LogOut</MenuItem>
          </Menu>

          
            <IconButton
             aria-controls={open ? "shortcut-bar" : undefined }
             aria-haspopup="true"
             aria-expanded={open ? "true": undefined }
              onClick={handleClick}
               id="shortcut-bar-button"
                 size="large">
           <Avatar src="Assets\Profile-Pics\MohamedIbrahim.jpg" 
            alt="user-picture"
           />
          </IconButton>

            <IconButton aria-label="mail" size="large">
              <MailIcon fontSize="large" sx={{color:"#bbdefb"}}/>
            </IconButton> 

            <IconButton aria-label="notification" size="large">
              <NotificationsIcon fontSize="large" sx={{color:"#bbdefb"}}/>
            </IconButton>
          </Stack>
          </Box>
         


        </Box>
      </Toolbar>
    </AppBar>
  )
}
