import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/images/logo.svg';

export default function Header() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard"><img src={logo} alt="" /></Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
