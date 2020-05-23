import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


function Navbar() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );

}
//ReactDOM.render(<Navbar />, document.querySelector('#root'));

const useStyles = makeStyles({
    root: {
      width: "100%",
    },
  });

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Find at DLF"/>
        <BottomNavigationAction label="I am at DLF"/>

      </BottomNavigation>
    );
  }