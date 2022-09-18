import Head from 'next/head'

export default function Layout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <div className={'container mx-auto'}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="NBA Teams and Players"
                />
            </Head>
            <header className={'text-2xl font-semibold'}>NBA Teams and Players</header>
            <main>{children}</main>
        </div>
    )
}