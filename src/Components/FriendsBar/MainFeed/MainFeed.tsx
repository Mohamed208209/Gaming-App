import {Box,
    Typography,
    Stack,
     List,
   ListItem,
   ListItemText,
   
   IconButton,
Avatar
} from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';

export const MainFeed = () => {
 return (
 <List sx={{ margin: 0,paddingRight:"0",
     marginRight:"0",
     height:"100%" 
     }}>

   <ListItem>
    <Box sx={{borderRadius:"2vh"}} bgcolor="#bbdefb" border="1vw solid #bbdefb">
       <ListItemText
         primary={
           <Stack direction="row" alignItems="center">
             <Avatar alt="User-pic" 
               src="Assets\Profile-Pics\Imhoteb.jpg"/>
             <Typography sx={{color:"black" ,fontWeight: 'bold'}}
               variant="h6">Imhotep</Typography>
           </Stack>
         }
         secondary={
           <Stack spacing={2}>
             <Typography variant="caption">
               Teaching him some manners
             </Typography>
             <Box sx={{position:"relative"}} 
               
               height="50vh" >
               <img height="65%" alt="imhoteb yawning"
                 src="https://i.ytimg.com/vi/WxZrL-ZYYFg/maxresdefault.jpg"/>
               <Stack sx={{margin:"0"}}
                 justifyContent="space-around"
                 alignItems="center"
                 direction="row">
                 <IconButton>
                   <ThumbDownIcon />
                 </IconButton>
                 <IconButton>
                   <ThumbUpIcon />
                 </IconButton>
                 <IconButton>
                   <ChatBubbleOutlineIcon />
                 </IconButton>
                 <IconButton>
                   <ScreenShareIcon />
                 </IconButton>
               </Stack> 
             </Box>
           </Stack>
         }
       />
       </Box>
   </ListItem>

   
 </List>
 )
}