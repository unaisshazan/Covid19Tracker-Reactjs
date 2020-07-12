import React ,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:1000,
    margin:'0 auto',
    marginTop: '2%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoPanel() {
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();
            delete data.results[0].source;
            setGlobalData(data.results[0]);
        }
        getData();
    }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {Object.keys(globalData).map((key,ind)=>{ // always give unique key for dynamic content
          //if you want array of all day use .key and for each and map use as same to fecth all the data in to website view

        return(
            <Grid item xs={12} sm={4} key={ind}>
            <Paper 
            className={classes.paper} 
            elevation={4}
            ><h3>{key}</h3>
            <h3>{globalData[key]}</h3>
            </Paper>
          </Grid>

        )
      })}
     
    
        </Grid>
       
    </div>
  );
}
  