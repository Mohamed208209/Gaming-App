import{
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    ListItemButton,
    Divider

}
from "@mui/material"
export const FriendsBar = () => {
  return (
    <Box  flexDirection={"column"}
      sx={{backgroundColor:"#424242",
       alignItems: 'flex-end',
       "color":"#bbdefb",
       
       
       }}>
        <List  sx={{"height":"auto" }}>
         <ListItem>
            <ListItemButton>
           <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\BatMan.png"
            alt="BatMan"
            />

           </ListItemAvatar>
            
           <ListItemText primary="BatMan" secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
            />
            </ListItemButton>
         </ListItem>
         <Divider/>

          <ListItem>
          <ListItemButton>
          <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\ComfyFish.jpg"
            alt="ComfyFish"
            />

           </ListItemAvatar>
           <ListItemText primary="ComfyFish" secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
            />
            </ListItemButton>
         </ListItem>
         <Divider/>  

          <ListItem>
          <ListItemButton>
          <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\CreppyCat.jpg"
            alt="CreppyCat"
            />

           </ListItemAvatar>
           <ListItemText primary="CreppyCat" secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
           
           />
           </ListItemButton>
         </ListItem>
         <Divider/>

          <ListItem>
          <ListItemButton>
            
          <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\CuteDoggo.jpg"
            alt="CuteDoggo"
            />

           </ListItemAvatar>
           <ListItemText primary="CuteDoggo" secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
            />
            </ListItemButton>
            
         </ListItem>
         <Divider/>
         <ListItem>
         <ListItemButton>
          <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\HappyCat.jpg"
            alt="HappyCat"
            />

           </ListItemAvatar>
           <ListItemText primary="HappyCat" secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
            />
            </ListItemButton>
         </ListItem>
         <Divider/> 

          <ListItem>
          <ListItemButton>
          <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\Imhoteb.jpg"
            alt="Imhoteb"
            />

           </ListItemAvatar>
           <ListItemText primary="Imhoteb"  secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
           />
           </ListItemButton>
         </ListItem>
         <Divider/> 



          <ListItem>
          <ListItemButton>
          <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\seriousCat.jpg"
            alt="seriousCat"
            />

           </ListItemAvatar>
           <ListItemText primary="seriousCat" secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
            />
            </ListItemButton>
         </ListItem>
         <Divider/> 

          <ListItem>
          <ListItemButton>
          <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\SmileyDoggo.png"
            alt="SmileyDoggo"
            />

           </ListItemAvatar>
           <ListItemText primary="SmileyDoggo" secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
            />
            </ListItemButton>
         </ListItem>
         <Divider/> 

         <ListItem>
         <ListItemButton>
          <ListItemAvatar>
            <Avatar
            src="Assets\Profile-Pics\WonderCat.jpg"
            alt="WonderCat"
            />

           </ListItemAvatar>
           <ListItemText primary="WonderCat" secondary="Online"
           secondaryTypographyProps={{ style: { color: 'green' } }}
           
           />
           </ListItemButton>
         </ListItem>
         <Divider/> 

  

        </List>

    </Box>
  )
}
