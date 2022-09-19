import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Index from '../pages/index'
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

    it('page is rendered, team and player info is included', async () => {
      expect(screen.getByText('Atlanta Hawks')).toBeInTheDocument();
      expect(screen.getByText('Clint')).toBeInTheDocument();
      expect(screen.getByText('Capela')).toBeInTheDocument();
    })

    // it('when user clicks on the team name, the open class is applied', async () => {
    //   const teamEle = screen.getByTestId('1610612737-Hawks');
    //   expect(teamEle).not.toHaveClass('open')
    //   fireEvent.click(teamEle)
    //   expect(teamEle).toHaveClass('open')
    // })
  })
})