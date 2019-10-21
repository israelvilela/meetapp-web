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
      background: #f94d6a;
      height: 30px;
      padding: 0 15px;
      margin: 5px 0 0;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#fb6f91')};
      }

      div {
        display: flex;
        justify-content: baseline;
        align-items: center;

        span {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          margin-left: 5px;
        }
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
  background: rgba(0, 0, 0, 0.1);

  strong {
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }
`;
