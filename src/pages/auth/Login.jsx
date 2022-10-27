import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/img/logo.png'
import * as Styled from './auth-styles'

function Login({ setToken }) {
  return (
    <Styled.AuthWrapper>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Styled.InputAuth type="text" placeholder="Логин" />
      <Styled.InputAuth type="text" placeholder="Пароль" />
      <Styled.EventBtn type="button" primary onClick={setToken}>
        Войти
      </Styled.EventBtn>
      <Link to="/registration">
        <Styled.EventBtn type="button">Зарегистрироваться</Styled.EventBtn>
      </Link>
    </Styled.AuthWrapper>
  )
}

export default Login
