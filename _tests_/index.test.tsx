import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Index, { NBATeams } from '../pages/index'
import '@testing-library/jest-dom'
import 'whatwg-fetch'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { mockTeam } from './test-utils/mock-team'
import { mockPlayer } from './test-utils/mock-player'


const server = setupServer(
  rest.get('/api/teams', mockTeam),
  rest.get('/api/players', mockPlayer),
)

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('team list', () => {
  describe('when team api is called', () => {
    beforeEach(async () => {
      render(<Index />)
      await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
    })

    it('page is rendered, team and player info is displayed', async () => {
      expect(screen.getByText('Atlanta Hawks')).toBeInTheDocument();
      expect(screen.getByText('Clint')).toBeInTheDocument();
      expect(screen.getByText('Capela')).toBeInTheDocument();
    })
  })
})