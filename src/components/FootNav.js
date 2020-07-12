  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PublicIcon from '@material-ui/icons/Public';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: -5,
  },
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
          console.log(newValue)
          screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country Stats" icon={<PublicIcon />} />
      <BottomNavigationAction label="Graphs" icon={<EqualizerIcon />} />
    </BottomNavigation>
  );
}