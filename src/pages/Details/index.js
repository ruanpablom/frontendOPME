import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import api from '../../services/api';
import { Container, UserDetails, Line, Repositories, RepoInfo } from './styles';

export default function Details({ location }) {
  const [userDetail, setUserDetail] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    async function loadUserDetail() {
      const response = await api.get(`users/${location.login}/details`);
      setUserDetail(response.data);
    }
    async function loadUserRepos() {
      const response = await api.get(`users/${location.login}/repos`);

      const data = response.data.filter(repo => !repo.private);
      setUserRepos(data);
    }
    loadUserDetail();
    loadUserRepos();
  }, [location]);

  const createdAt = useMemo(() => {
    if (userDetail.created_at) {
      return format(new Date(userDetail.created_at), 'dd/MM/yyyy');
    }
    return '';
  }, [userDetail]);

  return (
    <Container>
      <UserDetails>
        <Line>
          <strong>ID:</strong>
          <span>{userDetail.id}</span>
        </Line>
        <Line>
          <strong>LOGIN:</strong>
          <span>{userDetail.login}</span>
        </Line>
        <Line>
          <strong>PROFILE URL:</strong>
          <a href={userDetail.html_url}>{userDetail.html_url}</a>
        </Line>
        <Line>
          <strong>CREATION DATE:</strong>
          <span>{createdAt}</span>
        </Line>
      </UserDetails>
      <Repositories>
        <strong>REPOSITORIES</strong>
        {userRepos.map(repo => (
          <RepoInfo key={repo.id}>
            <Line>
              <strong>ID:</strong>
              <span>{repo.id}</span>
            </Line>
            <Line>
              <strong>NAME:</strong>
              <span>{repo.name}</span>
            </Line>
            <Line>
              <strong>URL:</strong>
              <a href={repo.url}>{repo.url}</a>
            </Line>
          </RepoInfo>
        ))}
      </Repositories>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    login: PropTypes.string
  }).isRequired
};
