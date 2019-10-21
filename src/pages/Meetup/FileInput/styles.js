import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 900px;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  border: 0;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 900px;
      height: 300px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 16px;
        color: #999;
      }
    }
  }
`;
