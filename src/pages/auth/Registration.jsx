import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './auth-styles'
import Logo from '../../components/img/logo.png'

function Registration({ setToken }) {
  return (
    <Styled.AuthWrapper>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Styled.InputAuth type="text" placeholder="Логин" />
      <Styled.InputAuth type="text" placeholder="Пароль" />
      <Styled.InputAuth type="text" placeholder="Повторите пароль" />
      <Styled.EventBtn type="button" primary onClick={setToken}>
        Зарегистрироваться
      </Styled.EventBtn>
    </Styled.AuthWrapper>
  )
}

export default Registration
