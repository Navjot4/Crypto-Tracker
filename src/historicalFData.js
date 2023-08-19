export const historicalFData=async(id,currency,days=365)=>{
    const URL=`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
    const data= await fetch(URL)
    .then((res)=>res.json())
    .then((data)=>data);

   const {prices}=data;
   return {prices};
}