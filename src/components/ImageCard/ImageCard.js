import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    margin:"20px",
    marginLeft:"100px",
    marginRight:"100px",
    transition:"all .2s ease-in-out",
    cursor:"pointer",
    backgroundColor:"#fff",
    "&:hover":
    {
      boxShadow: "0 0 0 6px #fff, 0 0 0 12px #17252a",
      transform:"scale(1.1)",
    }    
  }
});

export default function ImageCard({checked}) {
  const classes = useStyles();
  return (
      <Collapse in={checked} {...(checked ? { timeout:1500 } : {} )}>
        <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" style={{color:"#17252a",fontSize:"3rem"}}>
            <strong>The Sparks Foundation</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="ul" style={{color:"#fffdd0",fontSize:"1rem"}}>
                <ul>
                  <li>Worked as Data Science Intern</li>
                  <li>Solved various problems and guided others in their work</li>
                  <li>Implemented Classification and Regression algorithms to evaluate and solve diverse company problems</li>
                  <li>Produced in-depth analyses and proposed solutions to the given data</li>
                </ul>
          </Typography>
        </CardContent>
    </Card>
      </Collapse>
    
  );
}