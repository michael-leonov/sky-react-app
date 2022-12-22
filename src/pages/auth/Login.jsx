/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../components/img/logo.png'
import * as Styled from './auth-styles'
import { userLogin } from '../../redux/slices/userActions'

function Login() {
  const { loading, userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <Styled.AuthWrapper>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <form onSubmit={handleSubmit(submitForm)}>
        <Styled.InputAuth
          type="text"
          placeholder="Логин"
          {...register('username')}
        />
        <Styled.InputAuth
          type="text"
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
