import React, {Fragment, useEffect, useState} from 'react';
import Album from './album';
import styled from 'styled-components';
import {Columns, Heading} from 'react-bulma-components';
import AlbumsService from '../services/albums';

const DivVSpaced = styled.div`
    margin-top: 50px;
`

const Discovery = () => {
    /*const albums_mock = [
        {id: 1, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/'},
        {id: 2, artist_name: 'Andrew Howes', title: 'The Great Bear', cover_url: ''},
        {id: 3, artist_name: 'Yellow Chair', title: 'Barcelona', cover_url: ''},
        {id: 4, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: ''}
    ];

    const albums = albums_mock.map((album, key) =>
        <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
            <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url}>

            </Album>
        </Columns.Column>
    ); */

    const [recent_albums, setRecentAlbums] = useState([]);
    const [recommended_albums, setRecommendedAlbums] = useState([]);

    async function fetchAlbums() {
        const response = await AlbumsService.index();
        setRecentAlbums(response.data['recent_albums']);
        setRecommendedAlbums(response.data['recommended_albums']);
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    const recent_albums_components = recent_albums.map((album, key) =>
        <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
            <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}/>
        </Columns.Column>
    );

    /*const recent_albums_components = recent_albums.map((album, key) => {
        <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
            <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id} />
        </Columns.Column>
    });*/

    const recommended_albums_components = recommended_albums.map((album, key) => 
        <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
            <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}/>
        </Columns.Column>
    );

    return(
        <Fragment>
            {recent_albums_components.length > 0 &&
                <div>
                    <Heading className='has-text-white' size={4}>
                        Tocadas recentemente
                    </Heading>
                    <Columns className='is-mobile'>
                        {recent_albums_components}
                    </Columns>
                </div>
            }

            {recommended_albums_components.length > 0 &&
                <DivVSpaced>
                    <Heading className='has-text-white' size={4}>
                        Recomendadas
                    </Heading>
                    <Columns className='is-mobile'>
                        {recommended_albums_components}
                    </Columns>
                </DivVSpaced>
            }
        </Fragment>
    );
};

export default Discovery;