/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../components/img/logo.png'
import * as Styled from './auth-styles'
import { userLogin } from '../../redux/slices/userActions'

function Login() {
  const { loading, userToken, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (userToken) {
      navigate('/')
    }
  }, [navigate, userToken])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <Styled.AuthWrapper>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      {error && { error }}
      <form onSubmit={handleSubmit(submitForm)}>
        <Styled.InputAuth
          type="email"
          placeholder="E-mail"
          {...register('email')}
        />
        <Styled.InputAuth
          type="password"
          placeholder="Пароль"
          {...register('password')}
        />
        <Styled.EventBtn type="submit" primary disabled={loading}>
          Войти
        </Styled.EventBtn>
      </form>

      <Link to="/registration">
        <Styled.EventBtn type="button">Зарегистрироваться</Styled.EventBtn>
      </Link>
    </Styled.AuthWrapper>
  )
}

export default Login
