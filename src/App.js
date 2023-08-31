import React,{useState} from "react";
import {Card,CardContent,Grid} from"@mui/material"
import { Info } from "./Component/Info"; 

function App() {
  return (
     <Card sx={{bgcolor:"darkcyan"}}>
        <CardContent>
          <Info/>
        </CardContent>
     </Card>
  );
}

export default App;
