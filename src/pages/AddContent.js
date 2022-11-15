import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { ArrowBack, ConfirmationNumberRounded } from '@mui/icons-material';
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
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Paper,
    FilledInput,
    OutlinedInput,
} from '@mui/material';
import fetchService from '../services/fetchService';
import ContentCard from '../components/ContentCard';
import { Navigate } from 'react-router-dom';
import { borderRadius } from '@mui/system';
import MaskTextField from '../components/MaskTextField';

function AddContent() {
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

    const FetchCreate = async (url, method, content) => {
        let confirmation = window.prompt('Digite sua senha para confirmar.');
        let passwordFormated = localStorage.getItem('password').replace('"', '').replace('"', '');

        if (confirmation === passwordFormated) {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(content),
            });

            const data = await response.json();

            if (response.status === 201) {
                alert('cadastrado com sucesso!');
                setCreated(true);
            } else {
                alert(data.message);
            }
        } else {
            alert('Senha incorreta, tente novamente!');
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

        console.log(content);

        FetchCreate('https://orange-evolution-squad35.herokuapp.com/contents', 'POST', content);
        getAuthorName();
        getContentTypeName();
    };

    useEffect(() => {
        FetchContentType('https://orange-evolution-squad35.herokuapp.com/content-types');
        FetchAuthors('https://orange-evolution-squad35.herokuapp.com/authors');
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
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

                        {!created && (
                            <>
                                <Typography my={2}>Adição de conteúdo:</Typography>
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
                                            {/* <TextField
                                                size="small"
                                                focused
                                                fullWidth
                                                type="text"
                                                id="timeContent"
                                                value={duration}
                                                onChange={(e) => setDuration(e.target.value)}
                                            ></TextField> */}
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
                                                style={{color:"inherit", fontFamily:"Montserrat" , fontSize:"1rem", fontWeight:200, background: "none", border: "1px solid #ffffff", padding:'10px'}}
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
                                        <Button

                                            variant="contained"
                                            color="inherit"
                                            fullWidth
                                            onClick={handleClickOpen}
                                        >
                                            <Typography color="#000000" textTransform="none">
                                                Teste Modal
                                            </Typography>
                                        </Button>                                      

                                        <Dialog open={open} onClose={handleClose}>                                        
                                            <DialogContent   style={{backgroundColor: "#ffffff"}}>
                                                <DialogContentText my={2} style={{backgroundColor: "#ffffff", color:"#000000" }}>
                                                    Por favor, confirme sua senha
                                                </DialogContentText>
                                                <OutlinedInput                                            
                                                    type="password"
                                                    focused
                                                    required                                                                                                      
                                                    size="small"
                                                    p={0}
                                                    style={{backgroundColor:"#E2E2E2B2",  borderRadius: "10px", color: "#000000"}}
                                                    
                                                />
                                            </DialogContent>
                                            <DialogActions style={{backgroundColor: "#ffffff"}}>                                                
                                                <Button onClick={handleClose} fullWidth color="secondary">ok</Button>                                     
                                            </DialogActions>
                                        </Dialog>
                                        
                                    </Grid>
                                </Grid>
                            </>
                        )}
                    </Box>

                    {created && (
                        <ContentCard
                            title={contentName}
                            type={contentTypeName}
                            description={description}
                            author={authorName}
                            duration={duration}
                            image={image}
                        />
                    )}
                </>
            )}

            {logged === 'false' && <Navigate to="/login" replace={true} />}
        </div>
    );
}

export default AddContent;
