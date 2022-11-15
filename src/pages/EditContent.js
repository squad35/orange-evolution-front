import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { ArrowBack } from '@mui/icons-material';
import {
    Box,
    Grid,
    IconButton,
    TextField,
    Typography,
    FormControl,
    TextareaAutosize,
    Button,
    Select,
    MenuItem,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    OutlinedInput,
} from '@mui/material';
import fetchService from '../services/fetchService';
import ContentCard from '../components/ContentCard/ContentCard';
import { Navigate, useParams } from 'react-router-dom';
import MaskTextField from '../components/MaskTextField';
import ConvertTime from '../services/ConvertTime';

const EditContent = () => {
    const [contentType, setContentType] = useState([]);
    const [contentTypeId, setContetTypeId] = useState('');
    const [contentTypeName, setContetTypeName] = useState('');
    const [contentName, setContentName] = useState('');
    const [authors, setAuthors] = useState([]);
    const [authorId, setAuthorId] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [duration, setDuration] = useState('');
    const [durationInSeconds, setDurationInSeconds] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');
    const [contentLink, setContentLink] = useState('');
    const [description, setDescription] = useState('');
    const [created, setCreated] = useState(false);
    const [logged, setLogged] = useState(localStorage.getItem('logged'));
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState(
        localStorage.getItem('first_name').replace('"', '').replace('"', '')
    );
    const [ParamsId] = useState(useParams().id);

    const FetchContentType = async (url) => {
        const response = await fetchService(url, 'GET');
        const data = await response.json();
        setContentType(data);
    };

    const FetchAuthors = async (url) => {
        const response = await fetchService(url, 'GET');
        const data = await response.json();
        setAuthors(data);
    };

    const FetchContentData = async (url) => {
        const response = await fetchService(url, 'GET');
        const data = await response.json();

        setContetTypeId(data[0].content_type_id);
        setContentName(data[0].name);
        setAuthorId(data[0].author_id);
        setImage(data[0].image);
        setContentLink(data[0].link);
        setDescription(data[0].description);

        setDuration(ConvertTime(data[0].duration));
        setDurationInSeconds(data[0].duration);
    };

    const FetchCreate = async (url, method, content) => {
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(content),
        });

        const data = await response.json();

        if (response.status === 200) {
            alert('Conteúdo editado com sucesso!');
            setCreated(true);
        } else {
            alert(data.message);
        }
    };

    const handleContentTypeChange = (e) => {
        setContetTypeId(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthorId(e.target.value);
    };

    const getAuthorName = () => {
        authors.map((author) => {
            if (authorId === author.id) {
                setAuthorName(author.name);
            }
        });
    };

    const getContentTypeName = () => {
        contentType.map((contentType) => {
            if (contentTypeId === contentType.id) {
                setContetTypeName(contentType.name);
            }
        });
    };

    const convertDurationInSeconds = () => {
        const hours = duration.split(':')[0];
        const minutes = duration.split(':')[1];
        const seconds = duration.split(':')[2];
        let totalInSeconds = 0;

        if (hours) totalInSeconds += parseInt(hours) * 3600;
        if (minutes) totalInSeconds += parseInt(minutes) * 60;
        if (seconds) totalInSeconds += parseInt(seconds);

        return totalInSeconds;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClickOpen();
    };

    useEffect(() => {
        FetchContentType('https://orange-evolution-squad35.herokuapp.com/content-types');
        FetchAuthors('https://orange-evolution-squad35.herokuapp.com/authors');

        FetchContentData(`https://orange-evolution-squad35.herokuapp.com/contents/${ParamsId}`);
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleConfirmPassword = () => {
        let passwordFormated = localStorage.getItem('password').replace('"', '').replace('"', '');
        if (confirmPassword === passwordFormated) {
            let content = {
                name: contentName,
                content_type_id: contentTypeId,
                author_id: authorId,
                duration: convertDurationInSeconds(),
                link: contentLink,
                description: description,
                image: image,
                tags: tags,
            };

            FetchCreate(
                `https://orange-evolution-squad35.herokuapp.com/contents/${ParamsId}`,
                'PUT',
                content
            );

            getAuthorName();
            getContentTypeName();
        } else {
            alert('senha incorreta, tente novamente!');
        }

        setConfirmPassword('');
        setOpen(false);
    };

    return (
        <div>
            {logged === 'true' && (
                <>
                    <Header setLogged={setLogged} />
                    <Box
                        mt={10}
                        ms={2}
                        px={{ sm: 10, xs: 5 }}
                        display="flex"
                        flexDirection="column"
                    >
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton size="large" color="inherit">
                                <ArrowBack />
                            </IconButton>
                        </Box>

                        <Box mb={5}>
                            <Typography variant="h6" fontWeight={700}>
                                Olá, {userName}.
                            </Typography>
                            <Typography>Seja Bem vindo</Typography>
                        </Box>

                        {!created && (
                            <>
                                <Typography my={2}>Edição de conteúdo:</Typography>
                                <Grid
                                    container
                                    width="100%"
                                    maxWidth="xl"
                                    display="flex"
                                    alignItems="start"
                                    columnSpacing={{ md: 5 }}
                                >
                                    <Grid item xs={12} md={1}>
                                        <Typography>Tipo</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={2}>
                                        <FormControl color="primary" focused fullWidth size="small">
                                            <Select
                                                className="select"
                                                value={contentTypeId}
                                                onChange={handleContentTypeChange}
                                            >
                                                {contentType.map((content) => (
                                                    <MenuItem key={content.id} value={content.id}>
                                                        {content.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={1}>
                                        <Typography>Nome</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={2}>
                                        <FormControl color="primary" focused fullWidth>
                                            <TextField
                                                size="small"
                                                focused
                                                fullWidth
                                                type="text"
                                                id="nameContent"
                                                value={contentName}
                                                onChange={(e) => setContentName(e.target.value)}
                                                required
                                            ></TextField>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={1}>
                                        <Typography>Parceiro</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={2}>
                                        <FormControl color="primary" focused fullWidth size="small">
                                            <Select
                                                className="select"
                                                value={authorId}
                                                onChange={handleAuthorChange}
                                            >
                                                {authors.map((author) => (
                                                    <MenuItem key={author.id} value={author.id}>
                                                        {author.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={1}>
                                        <Typography>Duração</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={2}>
                                        <FormControl color="primary" focused fullWidth>
                                            <MaskTextField
                                                duration={duration}
                                                function={setDuration}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={1}>
                                        <Typography>Tags</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={2}>
                                        <FormControl color="primary" focused fullWidth>
                                            <TextField
                                                size="small"
                                                focused
                                                fullWidth
                                                type="text"
                                                id="tagsContent"
                                                value={tags}
                                                onChange={(e) => setTags(e.target.value)}
                                            ></TextField>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={1}>
                                        <Typography>Imagem</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={2}>
                                        <FormControl color="primary" focused fullWidth>
                                            <TextField
                                                size="small"
                                                focused
                                                fullWidth
                                                type="text"
                                                id="imgContent"
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)}
                                            ></TextField>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={1}>
                                        <Typography>Link</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={2}>
                                        <FormControl color="primary" fullWidth>
                                            <TextField
                                                size="small"
                                                focused
                                                fullWidth
                                                type="url"
                                                id="linkContent"
                                                value={contentLink}
                                                onChange={(e) => setContentLink(e.target.value)}
                                            ></TextField>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={1}>
                                        <Typography>Descrição</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={5}>
                                        <FormControl focused fullWidth>
                                            <TextareaAutosize
                                                focused
                                                minRows={5}
                                                style={{
                                                    color: 'inherit',
                                                    fontFamily: 'Montserrat',
                                                    fontSize: '1rem',
                                                    fontWeight: 200,
                                                    background: 'none',
                                                    border: '1px solid #ffffff',
                                                    padding: '10px',
                                                }}
                                                id="descContent"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={7}></Grid>
                                    <Grid item xs={12} md={5} mb={5}>
                                        <Button
                                            variant="contained"
                                            color="inherit"
                                            fullWidth
                                            onClick={handleSubmit}
                                        >
                                            <Typography color="#000000" textTransform="none">
                                                Adicionar
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} md={5} mb={5}>
                                        <Dialog open={open} onClose={handleConfirmPassword}>
                                            <DialogContent style={{ backgroundColor: '#ffffff' }}>
                                                <DialogContentText
                                                    my={2}
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        color: '#000000',
                                                    }}
                                                >
                                                    Por favor, confirme sua senha
                                                </DialogContentText>
                                                <OutlinedInput
                                                    type="password"
                                                    focused
                                                    required
                                                    value={confirmPassword}
                                                    onChange={(e) =>
                                                        setConfirmPassword(e.target.value)
                                                    }
                                                    size="small"
                                                    p={0}
                                                    style={{
                                                        backgroundColor: '#E2E2E2B2',
                                                        borderRadius: '10px',
                                                        color: '#000000',
                                                    }}
                                                />
                                            </DialogContent>
                                            <DialogActions style={{ backgroundColor: '#ffffff' }}>
                                                <Button
                                                    onClick={handleConfirmPassword}
                                                    fullWidth
                                                    color="secondary"
                                                >
                                                    ok
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Grid>
                                </Grid>
                            </>
                        )}

                        {created && (
                            <ContentCard
                                title={contentName}
                                type={contentTypeName}
                                description={description}
                                author={authorName}
                                duration={durationInSeconds}
                                image={image}
                                link={contentLink}
                            />
                        )}
                    </Box>
                </>
            )}

            {logged === 'false' && <Navigate to="/login" replace={true} />}
        </div>
    );
};

export default EditContent;
