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
  title: {

    color:'rgb(0, 154, 255)',
  },
  list: {
      color: 'rgb(27, 79, 114)',
  }
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
        // these headings are fetching from api if you want to change it use .replace function .upper case replace(/_/g,' ')this means underscore will replace by space
        return(
            <Grid item xs={12} sm={4} key={ind}>
            <Paper 
            className={classes.paper}  // becasue global["active casses"] thats why we extract all the  keys with global data toUpperCase() will shift all the data to upper case
            elevation={4}
            ><h3 className={classes.title}>{key.replace(/_/g,' ').toUpperCase()}</h3>
            <h3 className={classes.list}>{globalData[key]}</h3>
            </Paper>
          </Grid>

        )
      })}
     
    
        </Grid>
       
    </div>
  );
}
  