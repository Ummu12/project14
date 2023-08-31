import React,{useState} from "react";
import {Card,CardContent,Grid,TextField} from"@mui/material"


export const Info=()=>{
    const [data,setData]=useState("Name")
    const[age,setAge ]=useState("Age")
    const[name,setName]=useState("Number")
    return(
    <Grid container align="center" spacing={3}>

        <Grid item xs={6}>
            <Card sx={{bgcolor:"lightyellow"}}>
                <CardContent>
          <TextField onChange={(e)=>setData(e.target.value)} variant="outlined" fullWidth  label="Name here" 
              style={{backgroundColor:"lightyellow"}}/>
              </CardContent>
              </Card>
              
      </Grid>
  
   
      <Grid item xs={6}>
            <Card sx={{bgcolor:"lightyellow"}}>
                <CardContent>
                    <h2 >{age}</h2>
                </CardContent>
            </Card>
        </Grid>

      
   
        <Grid item xs={6}>
        <Card sx={{bgcolor:"lightyellow"}}>
                <CardContent>
                   <h2>{data}</h2> 
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={6}>
            <Card sx={{bgcolor:"lightyellow"}}>
                 <CardContent>
       <TextField onChange={(e)=>setAge(e.target.value)} variant="outlined" fullWidth  label="Age here"
        style={{backgroundColor:"lightyellow"}}/>
                 </CardContent>
        </Card>
       </Grid>

    
       <Grid item xs={6}>
        <Card sx={{bgcolor:"lightyellow"}}>
            <CardContent> 
       <TextField onChange={(e)=>setName(e.target.value)} variant="outlined" fullWidth  label="Number here"
        style={{backgroundColor:"lightyellow"}}/>
              </CardContent>
        </Card>
       </Grid>
       
       <Grid item xs={6}>
       <Card sx={{bgcolor:"lightyellow"}}>
                <CardContent>
                   <h2>{name}</h2> 
                </CardContent>
            </Card>
        </Grid>


 
    </Grid>
    )
}