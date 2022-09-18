import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

interface PlayerProps {
    headshot: string
    fn: string
    ln: string
    jerseyNum: number
    position: string
    points: string
    rebounds: string
    assists: string
    pid: number
    teamLogo: string
  }

export default function PlayerCard({
  headshot,
  fn,
  ln,
  jerseyNum,
  position,
  points = '--',
  rebounds = '--',
  assists = '--',
  pid,
  teamLogo,
}: PlayerProps) {
    
  return (
    <div key={pid} className={'flex flex-col p-0 overflow-hidden border relative border-gray-100 shadow-md shadow-gray-200 rounded-lg w-full '}>
        <div className='absolute p-0 top-0 right-0'>
            <Image 
            src={teamLogo} 
            height={'35px'} 
            width={'35px'} 
            objectFit={'cover'}
            layout={'intrinsic'}
            />
        </div>
        <div className='absolute grow p-0 w-full -left-9'>
            <Image 
            className={'grayscale opacity-10'} 
            src={teamLogo} 
            height={'100%'} 
            width={'260px'} 
            objectFit={'cover'}
            layout={'intrinsic'}
            />
        </div>
        <div className={'flex flex-row flex-nowrap grow relative'}>
            <div className={'flex pl-1'}>
                <Image
                src={headshot}
                alt={'logo'}
                width={'100%'}
                height={'100%'}
                layout={'intrinsic'}
                />
            </div>
            <div className={'flex flex-col gap-y-0 mt-5 grow'}>
                <div className={'flex-row items-baseline text-xs text-gray-400 font-normal'}>
                    <span className={'pr-1 mr-1 border-r border-gray-400 leading-tight'}>#{jerseyNum}</span>
                    <span className={'leading-tight'}>{position}</span>
                </div>
                <div className={'flex flex-col grow'}>
                    <div className={'text-base text-black font-bold leading-5'}>{fn}</div>
                    <div className={'text-base text-black font-bold leading-5'}>{ln}</div>
                </div>
            </div>
        </div>
        <div className={'flex flex-row flex-nowrap grow justify-center border-t-[3px] border-blue-600 bg-white'}>
            <div className={'flex flex-col justify-center items-center grow gap-y-0.5 pt-2 pb-2'}>
                <span className={'text-md leading-4'}>PPG</span>
                <span className={'font-bold text-lg leading-4'}>{points}</span>
            </div>
            <div className={'flex flex-col justify-center items-center grow gap-y-1  pt-2 pb-2 border-x border-gray-200'}>
                <span className={'text-md leading-4'}>RPG</span>
                <span className={'font-bold text-lg leading-4'}>{rebounds}</span>
            </div>
            <div className={'flex flex-col justify-center items-center grow gap-y-1 pt-2 pb-2'}>
                <span className={'text-md leading-4'}>APG</span>
                <span className={'font-bold text-lg leading-4'}>{assists}</span>
            </div>
        </div>
    </div>
)}
