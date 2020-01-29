import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FaGithubAlt } from 'react-icons/fa';

import api from '../../services/api';

import {
  Container,
  UserWrapper,
  Line,
  UserInfo,
  Button,
  LoadButton,
  Title
} from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [pageUrl, setPageUrl] = useState('');

  const loadUsers = useCallback(
    async url => {
      let response;
      if (url === undefined) {
        response = await api.get('users');
      } else {
        response = await axios.get(url);
      }

      setUsers([...users, ...response.data.data]);
      setPageUrl(response.data.next);
    },
    [users]
  );

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>
        <FaGithubAlt color="#11f5ff" size={22} />
        <h1>Github Users</h1>
      </Title>
      {users.map(user => (
        <UserWrapper key={user.id}>
          <UserInfo>
            <Line>
              <strong>ID:</strong>
              <span>{user.id}</span>
            </Line>
            <Line>
              <strong>LOGIN:</strong>
              <span>{user.login}</span>
            </Line>
          </UserInfo>
          <Button to={{ pathname: '/details', login: user.login }}>
            Details
          </Button>
        </UserWrapper>
      ))}
      <LoadButton onClick={() => loadUsers(pageUrl)}>LOAD MORE</LoadButton>
    </Container>
  );
}
