import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout/Layout'
import '@testing-library/jest-dom'

describe('Layout', () => {
  it('renders a Layout', async () => {
    render(<Layout />)
    screen.getByText('NBA Teams and Players')
  })
})