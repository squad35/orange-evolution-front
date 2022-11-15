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
import contentImage from '../../assets/content-image.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContentCard.module.css';
import ConvertTime from '../../services/ConvertTime';

function ContentCard(props) {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [link] = useState(`/edit-content/${props.id}`);
    const [durationFormated, setDurationFormated] = useState('');

    const formatedDescription = () => {
        let descriptionTemporary = props.description.slice(0, 120) + '...';
        let titleTemporary = props.title.slice(0, 45) + '...';
        setDescription(descriptionTemporary);
        setTitle(titleTemporary);
    };

    useEffect(() => {
        formatedDescription();
        setDurationFormated(ConvertTime(props.duration));
    }, []);

    return (
        <Card
            className={styles.container}
            sx={{ maxWidth: 345, minHeight: '560px', backgroundColor: 'white' }}
        >
            <CardHeader title={title} subheader={props.type} sx={{ color: 'black' }} />
            <a href={props.link} target="blank">
                <CardMedia
                    component="img"
                    height="194"
                    image={props.image ? props.image : contentImage}
                    alt="imagem do conteúdo"
                />
            </a>
            <CardContent sx={{ color: 'black' }}>
                <Typography variant="body2" sx={{ color: 'black' }}>
                    {description}
                </Typography>
                <p>
                    Oferecido por: <span>{props.author}</span>
                </p>
                <p>
                    Duração: <span>{durationFormated}</span>
                </p>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Link to={link}>
                        <DriveFileRenameOutlineIcon />
                    </Link>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ContentCard;
