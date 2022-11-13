import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import contentImage from '../assets/content-image.png';

function ContentCard(props) {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'white' }}>
            <CardHeader title={props.title} subheader={props.type} sx={{ color: 'black' }} />
            <CardMedia
                component="img"
                height="194"
                image={props.image ? props.image : contentImage}
                alt="imagem do conteúdo"
            />
            <CardContent sx={{ color: 'black' }}>
                <Typography variant="body2" sx={{ color: 'black' }}>
                    {props.description}
                </Typography>
                <p>
                    Oferido por: <span>{props.author}</span>
                </p>
                <p>
                    Duração: <span>{props.duration}</span>
                </p>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <DriveFileRenameOutlineIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ContentCard;
