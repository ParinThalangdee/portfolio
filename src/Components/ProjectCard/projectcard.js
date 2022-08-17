import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = ({ github, image, title, deployed, tech, description }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={title}
        subheader={tech}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          CAPTION
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="Github Repository">
          <a href={github} title="Repository Link" target="_blank">
            <GitHubIcon />
          </a>
        </IconButton>
        <IconButton aria-label="Deployed Link">
          <a href={deployed} title="Deployed Link" target="_blank">
            <LinkIcon />
          </a>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            <p>{description}</p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProjectCard