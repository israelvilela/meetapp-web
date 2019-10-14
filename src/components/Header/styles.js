import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    span {
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 10px;

  div {
    text-align: center;
    margin-right: 10px;

    strong {
      font-size: 12px;
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 10px;
      color: #999;
    }
  }

  button {
    margin-left: 10px;
    border: 0;
    height: 32px;
    width: 50px;
    background: #fb6f91;
    border-radius: 4px;
    color: #fff;
  }
`;
