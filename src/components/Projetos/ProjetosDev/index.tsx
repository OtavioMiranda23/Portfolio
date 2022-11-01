import React, { useEffect, useState } from 'react';

import { Container } from './styles';

type Repository = {
    full_name: string;
    url: string
}

const ProjetosDev = () => {
    const url = 'https://api.github.com/users/otaviomiranda23/repos';
    const [repos, setRepos] = useState<Repository[]>([]);
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setRepos(data))
    } , []);
    
  return (
    <Container>
    <ul>
        {repos.map(repository => {
            return (
            <li style={{color: '#fff'}}>
                <strong> {repository.full_name} </strong>
                <p> {repository.url} </p>
            </li>


            )
        })}
    </ul>
    </Container>
  );
}

export default ProjetosDev;