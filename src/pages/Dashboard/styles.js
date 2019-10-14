import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: 0;
      border-radius: 4px;
      background: #F94D6A;
      height: 30px;
      padding: 0 15px;
      color: #fff;
      margin: 5px 0 0;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#fb6f91')};
      }
    }

    strong {
      color: #fff;
      font-size: 24px;
    }
  }

  ul {
    width: 100%;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    color: #7159c1;
    font-size: 14px;
    font-weight: bold;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }
`;
