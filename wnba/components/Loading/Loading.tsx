export default function Loading() {
    return (
        <div className={'flex justify-center items-center h-screen bg-gray-300'}>
            <div className={'grid gap-2'}>
                <div data-testid={'loading'} className={'flex items-center justify-center space-x-2 animate-ping'}>
                    <div className={'w-8 h-8 bg-red-500 rounded-full'}></div>
                    <div className={'w-8 h-8 bg-red-500 rounded-full'}></div>
                    <div className={'w-8 h-8 bg-red-500 rounded-full'}></div>
                </div>
            </div>
        </div>
    )
}
