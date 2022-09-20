import Head from 'next/head'

export default function Layout({
    children,
}: {
    children: React.ReactNode,
}) : JSX.Element {
    return (
        <div className={'container mx-auto pt-14'}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="NBA Teams and Players"
                />
            </Head>
            <header className={'fixed top-0 left-0 w-full text-xl font-semibold bg-black text-white z-50'}>
                <div className={'flex flex-row justify-start items-center py-3'}>
                    <div className={'pl-4 mr-4'}>
                        <img
                            src={'https://cdn.nba.com/logos/leagues/logo-nba.svg'}
                            height={'56px'}
                            width={'100%'}
                            alt={'NBA'}
                        />
                    </div>
                    <div className={'text-base'}>Teams and Players</div>
                </div>
            </header>
            <main>{children}</main>
        </div>
    )
}