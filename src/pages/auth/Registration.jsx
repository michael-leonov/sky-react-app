/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as Styled from './auth-styles'
import Logo from '../../components/img/logo.png'
import { registerUser } from '../../redux/slices/userActions'

function Registration() {
  const { loading, userInfo, success } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (success) navigate('/login')
    if (userInfo) navigate('/')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch')
      return
    }

    // data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
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
          required
        />
        <Styled.InputAuth
          type="password"
          placeholder="Пароль"
          {...register('password')}
          required
        />
        <Styled.InputAuth
          type="password"
          placeholder="Повторите пароль"
          {...register('confirmPassword')}
          required
        />
        <Styled.EventBtn type="submit" primary disabled={loading}>
          Зарегистрироваться
        </Styled.EventBtn>
      </form>
    </Styled.AuthWrapper>
  )
}

export default Registration
