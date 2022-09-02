
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function ProductBottomBar()
{
    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" sx={{height:"60px", textAlign:"center", backgroundColor:"black", display:"flex"}}>
                {/* <Toolbar> */}
                    <Typography variant="subtitle" sx={{margin:"auto"}}>All rights reserved</Typography>
                {/* </Toolbar> */}
            </AppBar>
        </React.Fragment>
    )
}

export default ProductBottomBar;