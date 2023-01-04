import React from 'react'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import baseUrl from '../../constants'
import { setupApiStore, customRender } from '../../test-utils'
import { trackApi } from '../../redux/services/tracks'
import Playlist from '../../pages/selections'
import server from '../../mocks/server'
import { ThemeContextProvider } from '../../context/theme'

// Мокируем api store
const storeRef = setupApiStore(trackApi)

describe('All Tracks test suite', () => {
  it('Renders the component with loading state', async () => {
    render(
      <ThemeContextProvider>
        <Playlist />
      </ThemeContextProvider>,
      { wrapper: storeRef.wrapper }
    )

    // Проверяем начальное состояние компонента
    screen.getByText('Loading tracks...')
  })

  it('Renders the component without tracks', async () => {
    server.use(
      rest.get(`${baseUrl}catalog/track/all/`, (req, res, ctx) =>
        res(ctx.status(200), ctx.json([]))
      )
    )
    render(
      <ThemeContextProvider>
        <Playlist />
      </ThemeContextProvider>,
      { wrapper: storeRef.wrapper }
    )

    await screen.findByText(/No tracks published/i)
  })

  it('Renders the component with tracks', async () => {
    render(
      <ThemeContextProvider>
        <Playlist />
      </ThemeContextProvider>,
      { wrapper: storeRef.wrapper }
    )

    const tracksItems = await screen.findAllByRole('track')

    // Ждем ответа от сервера.
    expect(tracksItems).toHaveLength(2)
    // expect(await screen.findByText(/Chase/i)).toBeInTheDocument()
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
  })
})
