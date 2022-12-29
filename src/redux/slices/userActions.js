/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import baseUrl from '../../constants'

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        `${baseUrl}user/signup/`,
        { username, email, password },
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }
      return rejectWithValue(error.message)
    }
  }
)

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${baseUrl}user/login/`,
        { email, password },
        config
      )

      if (data) {
        try {
          const token = await axios.post(
            `${baseUrl}user/token/`,
            { email, password },
            config
          )
          localStorage.setItem('userToken', token.data.access)
          localStorage.setItem('refreshToken', token.data.refresh)
          data.userToken = token.data.access
        } catch (error) {
          if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
          }
          return rejectWithValue(error.message)
        }
      }

      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }
      return rejectWithValue(error.message)
    }
  }
)

export const checkUser = createAsyncThunk(
  'user/auth',
  async (refresh, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const token = await axios.post(
        `${baseUrl}user/token/refresh/`,
        { refresh },
        config
      )
      localStorage.setItem('userToken', token.data.access)

      return token.data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      }
      return rejectWithValue(error.message)
    }
  }
)
