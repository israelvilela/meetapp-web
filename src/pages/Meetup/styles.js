import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      border: 0;
      border-radius: 4px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    > button {
      display: flex;
      justify-content: end;
      align-items: flex-end;
      width: 150px;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      height: 30px;
      padding: 0 15px;
      margin: 5px 0 0 auto;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
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
  }
`;
