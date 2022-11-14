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
} from '@mui/material';
import fetchService from '../services/fetchService';
import ContentCard from '../components/ContentCard';

function AddContent() {
    const [contentType, setContentType] = useState([]);
    const [contentTypeId, setContetTypeId] = useState('');
    const [contentName, setContentName] = useState('');
    const [authors, setAuthors] = useState([]);
    const [authorId, setAuthorId] = useState('');
    const [duration, setDuration] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');
    const [contentLink, setContentLink] = useState('');
    const [description, setDescription] = useState('');
    const [dataReturned, setDataReturned] = useState('');
    const [created, setCreated] = useState(false);

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
                setDataReturned(data[0]);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        let content = {
            name: contentName,
            content_type_id: contentTypeId,
            author_id: authorId,
            duration: duration,
            link: contentLink,
            description: description,
            image: image,
            tags: tags,
        };

        console.log('conteudo: ', content);
        FetchCreate('https://orange-evolution-squad35.herokuapp.com/contents', 'POST', content);
    };

    useEffect(() => {
        FetchContentType('https://orange-evolution-squad35.herokuapp.com/content-types');
        FetchAuthors('https://orange-evolution-squad35.herokuapp.com/authors');
    }, []);

    return (
        <div>
            <Header />
            <Box mt={10} ms={2} px={{sm:10, xs:5}} display="flex" flexDirection="column">
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
                                <FormControl color="primary" focused fullWidth size='small'>
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
                            <Grid item xs={12} md={5} mb={2} >
                                <FormControl color="primary" focused fullWidth>
                                    <TextField
                                        size='small'
                                        focused
                                        fullWidth
                                        type="text"
                                        id="nameContent"
                                        value={contentName}
                                        onChange={(e) => setContentName(e.target.value)}
                                    ></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={1}>
                                <Typography>Parceiro</Typography>
                            </Grid>
                            <Grid item xs={12} md={5} mb={2}>
                                <FormControl color="primary" focused fullWidth size='small'>
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
                                <FormControl color="primary" focused fullWidth >
                                    <TextField
                                        size='small'
                                        focused
                                        fullWidth
                                        type="text"
                                        id="timeContent"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    ></TextField>
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={12} md={1}>
                                <Typography>Tags</Typography>
                            </Grid>
                            <Grid item xs={12} md={5} mb={2}>
                                <FormControl color="primary" focused fullWidth >
                                    <TextField
                                        size='small'
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
                                        size='small'
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
                                <FormControl color="primary" fullWidth >
                                    <TextField
                                        size='small'
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
                                <FormControl focused fullWidth >
                                    <TextareaAutosize
                                        focused
                                        minRows={5}
                                        style={{ background: "none", border: "1px solid #ffffff" }}
                                        id="descContent"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                </FormControl>                                    
                            </Grid>
                            <Grid item md={7}></Grid>
                            <Grid item xs={12} md={5}>
                                <Button variant="contained" color='inherit' fullWidth onClick={handleSubmit}><Typography color="#000000" textTransform="none">Adicionar</Typography></Button>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Box>

            {created && (
                <ContentCard
                    title={contentName}
                    type={contentTypeId}
                    description={description}
                    author={authorId}
                    duration={duration}
                    image={image}
                />
            )}
        </div>
    );
}

export default AddContent;
