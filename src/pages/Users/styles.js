import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 700px;
  border-radius: 4px;
  border: 2px solid #11f5ff;
  margin: 60px auto;
  padding: 30px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    font-size: 1.2rem;
    text-align: center;
    margin: 0 0px 10px 10px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex: auto;
  border-radius: 2px;
  border: 2px solid #11f5ff;
  padding: 5px;

  & + div {
    margin-top: 10px;
  }
`;

export const Line = styled.div`
  display: block;

  & + div {
    margin-top: 5px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;
  border-radius: 2px;
  border: 2px solid #11f5ff;
  background: #11f5ff;
  color: rgba(3, 46, 116, 1);
  padding: 0 5px 0 5px;

  &:hover {
    background: rgba(3, 46, 116, 1);
    color: #11f5ff;
  }
`;

export const LoadButton = styled.button`
  border: none;
  border-radius: 2px;
  background: #11f5ff;
  border: 2px solid #11f5ff;
  color: rgba(3, 46, 116, 1);

  width: 100%;
  margin-top: 10px;

  &:hover {
    background: rgba(3, 46, 116, 1);
    color: #11f5ff;
  }
`;
