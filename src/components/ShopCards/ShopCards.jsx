import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blueGrey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShopRating from '../Rating/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function ShopCards({ title, desc, datetime, photo, author, rating,location }) {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleClick = () => {
          console.log('Card Pressed'); // Call the onClick function passed from parent component
    };
      
  
    return (
      
      <Card sx={{ maxWidth: 345 } } onClick={handleClick}>
        <CardHeader
            sx={{ backgroundColor: '#110A23' }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {author.slice(0, 2).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={
            <React.Fragment>
             <ListItemIcon >
                <LocationOnIcon style={{ fontSize: 16, color: 'grey', verticalAlign:'middle',padding:2, display:'inline-block',marginTop:2  }} />
              
                <Typography sx={{ color: 'white' }}>{location}</Typography>
              </ListItemIcon>
            </React.Fragment>}
          titleTypographyProps={{ color: 'white' }} // Set title font color to white
          subheaderTypographyProps={{ color: '#FFFFFF' }} // Set subheader font color to white
        />
        <CardMedia
          component="img"
          height="194"
          image={photo}
          alt={title}
          sx={{mt:2,mb:2}}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <hr></hr>
        <CardActions disableSpacing>
            <ShopRating rating={rating}/>
          
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {/* Your detailed description here */}
            </Typography>
            {/* Additional content based on your requirements */}
          </CardContent>
        </Collapse>
      </Card>
    );
  }