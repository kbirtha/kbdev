import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout/Layout'
import '@testing-library/jest-dom'

describe('Layout', () => {
  it('renders a Layout', async () => {
    render(
    <Layout>
      <div>Test content</div>
    </Layout>)
    screen.getByText('Teams and Players')
    screen.getByText('Test content')
  })
})