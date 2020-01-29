import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  border-radius: 4px;
  border: 2px solid #11f5ff;
  margin: 60px auto;
  padding: 30px;

  display: flex;
  flex-direction: column;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background: #11f5ff;
    margin: 10px 0;
  }
`;

export const Repositories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #11f5ff;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`;

export const Line = styled.div`
  display: block;

  & + div {
    margin-top: 5px;
  }

  a {
    color: #11f5ff;
    word-wrap: break-word;
  }
`;
