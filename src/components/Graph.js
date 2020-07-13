import React,{useState,useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../api/api'
import styles from './Chart.css';
const Chart = () =>{
    
    const[dailydata, setdailydata] = useState({});
     
    useEffect(()=>{
       const fetchapi = async () => {
            const response = await fetchDailyData();
            
            setdailydata(response)
            console.log(response)
            };
            
            
        
            fetchapi();
    },[]);
    

    const LineChart = dailydata[0] ?(
        
            <Line
            data ={{
                labels: dailydata.map(({ date }) => date),
                datasets:[
                    {
                   data: dailydata.map((data) => data.confirmed),
                   label: 'Infected',
                   borderColor: '#3333ff',
                   fill: true,
                },{
                   data: dailydata.map((data) => data.deaths),
                   label: 'Deaths',
                   borderColor: 'red',
                   backgroundColor:['rgba(255,0,0,0.5)'],
                   fill: true,
                }],
        }}
    
        />):null;
    
        
    return(
       <center> <div className={styles.container} >
            {LineChart}
        </div>
        </center>

    )
}
export default Chart;