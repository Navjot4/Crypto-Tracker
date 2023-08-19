import { AppBar, Container, MenuItem, Toolbar, Typography,Select, makeStyles,ThemeProvider,createTheme } from '@material-ui/core'
import React from 'react';
import {CryptoState} from "../CryptoContext";

const useStyles=makeStyles(()=>({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
      },
}))


const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
          },
      type: 'dark',
    },
  });


function Header(){
    const classes=useStyles();
    const {currency,setCurrency} = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
       <Container>
        <Toolbar>
            <Typography className={classes.title}>CRYPTO-TRACKER</Typography>
            <Select variant="outlined"
            style={{
                width:80,height:40,marginLeft:15,
            }}
            value={currency}
            onChange={(e)=>setCurrency(e.target.value)}  > 
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
        </Toolbar>
       </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header