import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: #fff;
      font-size: 24px;
    }

    div {
      width: 200px;
      display: flex;
      justify-content: space-between;
    }
  }

  img {
    width: 900px;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h1 {
    color: #fff;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
  }

  span {
    color: #ccc;
    font-size: 14px;
  }
`;

export const EditButton = styled.button`
  border: 0;
  border-radius: 4px;
  background: #3b9eff;
  height: 40px;
  padding: 0 15px;
  color: #fff;
  margin: 5px 0 0;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;

  > span {
    color: #fff;
    margin-left: 5px;
  }

  &:hover {
    background: ${darken(0.03, '#3b9eff')};
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  border-radius: 4px;
  background: #fb6f91;
  height: 40px;
  padding: 0 15px;
  color: #fff;
  margin: 5px 0 0;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#fb6f91')};
  }

  > span {
    color: #fff;
    margin-left: 5px;
  }
`;
