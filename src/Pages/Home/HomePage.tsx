import { Grid } from "@mui/material"
import { TopBar } from '../../Components/TopBar/TopBar'
import { FriendsBar } from "../../Components/FriendsBar/FriendsBar"
import { MainFeed } from "../../Components/FriendsBar/MainFeed/MainFeed"



export const HomePage = () => {
  return (
    <Grid container sx={{margin:"0" ,height:"100%",backgroundColor:"black" }} >
     <Grid sx={{ height:"15vh",mb:"9.8vh"}} item xs={12}> <TopBar/> </Grid>
    
     <Grid  item xs={9}
     sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center',
     paddingRight:"0",
     border:"0.1vw dashed #004d40 ",
     marginTop:"-8vh",
    


      marginRight:"0"  }}
      >
        
        <MainFeed/>
        
      </Grid>

     <Grid item xs={3}
      sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end',marginTop:"-9vh"  }}>

       <FriendsBar/>
        </Grid>
     
     
    </Grid>
  )
}
