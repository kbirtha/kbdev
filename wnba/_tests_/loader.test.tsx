import { render, screen } from '@testing-library/react'
import Loading from '../components/Loading/Loading'
import '@testing-library/jest-dom'

describe('Loading', () => {
  it('renders a loader', async () => {
    render(<Loading />)
    screen.getByTestId('loading')
  })
})