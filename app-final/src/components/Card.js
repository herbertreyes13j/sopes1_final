import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
 
export default function List(props){
    console.log(props)
    const classes = useStyles();

  
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.datos.Url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.datos.Nombre}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.datos.Descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          {props.datos.Precio}
          </Button>

        </CardActions>
      </Card>
    )
}
