import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import fullstack from '../img/Fullstack.png';

function CourseCard(props) {
    return (
    <Card sx={{ maxWidth: 350, backgroundColor: 'transparent'}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="194"
            image={fullstack}
            alt="fullstack"
            />
            <CardContent>
                <Typography width="70%" lineHeight={1.2} gutterBottom variant="h6" color="inherit" fontWeight={700} component="div">
                    Desenvolvimento Fullstack
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    );
}

export default CourseCard;
