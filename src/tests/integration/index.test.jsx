import React from 'react'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import baseUrl from '../../constants'
import { setupApiStore, customRender } from '../../test-utils'
import { trackApi } from '../../redux/services/tracks'
import Playlist from '../../pages/selections'
import server from '../../mocks/server'

// Мокируем api store
const storeRef = setupApiStore(trackApi)

describe('All Tracks test suite', () => {
  it('Renders the component with loading state', async () => {
    render(<Playlist />, { wrapper: storeRef.wrapper })

    // Проверяем начальное состояние компонента
    screen.getByText('Loading tracks...')
  })

  it('Renders the component without tracks', async () => {
    server.use(
      rest.get(`${baseUrl}catalog/track/all/`, (req, res, ctx) =>
        res(ctx.status(200), ctx.json([]))
      )
    )
    render(<Playlist />, { wrapper: storeRef.wrapper })

    await screen.findByText(/No tracks published/i)
  })

  it('Renders the component with tracks', async () => {
    render(<Playlist />, { wrapper: storeRef.wrapper })

    const tracksItmes = await screen.findAllByRole('track')

    // Ждем ответа от сервера. Как только он придет,
    // отрисуется пункт списка
    expect(tracksItmes).toHaveLength(2)
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
  })
})
