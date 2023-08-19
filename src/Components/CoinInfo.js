import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import { CircularProgress,makeStyles } from '@material-ui/core';
import { historicalFData } from '../historicalFData';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const useStyles = makeStyles((theme) => ({
  container: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
    },
  },
}));


const CoinInfo = ({id,coin,currency}) => {
    const [historicalData,setHistoricalData]=useState();
    const [flag,setFlag]=useState(false);
    const classes=useStyles();
   const days=365;
    useEffect(()=>{
       const fetchHistoryData= async()=>{
        const data= await historicalFData(id,currency);
        setFlag(true);
        setHistoricalData(data.prices);
       }
       fetchHistoryData();
    },[id,currency])

    console.log(historicalData);
  return (
    <div className={classes.container}>
        {!historicalData | flag===false ? 
         ( <CircularProgress style={{color:"gold"}} size={250} thickness={1}/>):
         (
          <>
            <Line  data={{labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                    {
                      data: historicalData.map((coin) => coin[1]),
                      label: `Price ( Past ${days} Days ) in ${currency}`,
                      borderColor: "#EEBC1D",
                    },
                  ],
                }}
               options={{elements:{point:{radius:1}}}}/>
         </>
    
  )}
  </div>
)}


export default CoinInfo