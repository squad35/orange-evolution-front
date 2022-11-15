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

function CourseCard(props) {
    return (
        <Card sx={{ maxWidth: 350, backgroundColor: 'transparent' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="194"
                    image={props.image}
                    alt="cartão de visualização da trilha"
                />
                <CardContent>
                    <Typography
                        width="70%"
                        lineHeight={1.2}
                        gutterBottom
                        variant="h6"
                        color="inherit"
                        fontWeight={700}
                        component="div"
                    >
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CourseCard;
