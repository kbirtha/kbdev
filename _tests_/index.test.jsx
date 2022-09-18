import { render, screen } from '@testing-library/react'
import Index from '../pages/index'
import '@testing-library/jest-dom'
import { setImmediate } from 'timers'

const flushPromises = () => new Promise(setImmediate);

describe('Index', () => {
  it('renders page', async () => {
    render(<Index />)

    screen.getByText('Loading...')

    await flushPromises();

    screen.getByText('NBA')
  })
})