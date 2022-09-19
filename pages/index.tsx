import Image from 'next/image'
import useSWR from 'swr';
import Layout from '../components/Layout/Layout';
import Loading from '../components/Loading/Loading';
import PlayerCard from '../components/PlayerCard/PlayerCard';
import Player from '../models/player'
import { v4 as uuidv4 } from 'uuid';

type TeamProps = {
  teamId: number;
  city: string;
  name: string;
  teamColor?: string;
  logoUrl: string;
  players?: null|Player[];
}

function filterPlayersByTeamAbbreviation(arr, abrev) {
  return arr.filter((el) => {
      return el.ta && el.ta == abrev;
  });
}

//fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {

  const { data: teamsData, error: teamsError } = useSWR("/api/teams", fetcher);
  const { data: playersData, error: playersError } = useSWR("/api/players", fetcher);

  //Handle the error state
  if (teamsError || playersError) return <div>Failed to load</div>;
  //Handle the loading state
  if (!teamsData || !playersData) return <Loading />;

  if (teamsData.teams) {
    teamsData.teams.sort((a, b) => {
      if(a.city > b.city) {
        return 1;
      } else if(a.city < b.city) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  teamsData.teams.map((team) => {
    const players = filterPlayersByTeamAbbreviation(playersData.players, team.ta);
    team.roster = players;
  });
  return (
    <Layout key={uuidv4()}>
      { teamsData && teamsData.teams.map((team, index) => (
        <NBATeams
          key={uuidv4()}
          teamId={team.tid}
          city={team.city}
          name={team.name}
          logoUrl={team.logo}
          players={team.roster}
        />
      ))}
    </Layout>
  )
}

export function NBATeams({
  teamId,
  city,
  name,
  teamColor,
  logoUrl,
  players,
}: TeamProps) {

  return (
    <details data-testid={teamId +'-'+ name} className={'flex flex-row bg-white hover:bg-gray-100 open:duration-300'}>
      <summary className={'flex flex-nowrap bg-inherit px-5 py-3 text-lg cursor-pointer justify-start items-center '}>
          <Image
          src={logoUrl}
          alt={'logo'}
          width={'50px'}
          height={'50px'}
        />
        <div className={'text-2xl'}>{city} {name}</div>
      </summary>
      <div className={'flex flex-col bg-white px-5 py-3 border-t border-gray-300 text-sm font-light'}>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap p-4 rounded-lg justify-start items-center w-full gap-5'}>  
        { players && players.map(player => (
            <div key={player.pid} className={'mx-auto w-full max-w-xs sm:max-w-md md:max-w-xl'}>
              <PlayerCard 
                pid={player.pid}
                headshot={player.headshot}
                fn={player.fn}
                ln={player.ln}
                jerseyNum={player.num}
                position={player.pos}
                points={(player.pts ? player.pts : '--')}
                rebounds={(player.reb ? player.reb : '--')}
                assists={(player.ast ? player.reb : '--')}
                teamLogo={logoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}
