import React, {Fragment, useState, useEffect} from 'react';
import {Heading, Image} from 'react-bulma-components';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';
import AlbumsService from '../services/albums';
import Musics from './musics';

const DivVSpaced = styled.div`
    margin-top: 10px;
`

const Album = (props) => {
    let {id} = props;
    const [album, setAlbum] = useState([]);

    async function fetchAlbum() {
        const response = await AlbumsService.show(id);
        setAlbum(response.data);
    };

    useEffect(() => {
        fetchAlbum();
    }, []);

    return(
        <Fragment>
        
            <Image src={album.cover_url}/>
            <DivVSpaced>
                <Heading size={6} className='has-text-white'>{album.title}</Heading>
                <Heading size={6} className='has-text-white' subtitle>{album.artist_name}</Heading>
            </DivVSpaced>            
            <Musics songs={album.songs || []} />
        
        </Fragment>
    );
};

export default Album;