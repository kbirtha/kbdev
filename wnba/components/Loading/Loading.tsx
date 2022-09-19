export default function Loading(): JSX.Element {
    return (
        <div className="w-full h-full fixed top-0 left-0 bg-zinc-300 opacity-80 z-50">
            <div className="opacity-100 top-1/2 my-0 mx-auto relative flex flex-col justify-center items-center gap-2">
                <div className={'spinner-border animate-spin w-14 h-14 border-4 border-t-4 border-gray-800 border-t-orange-600 rounded-full'} role={'status'}>
                </div>
                <div className={'animate-pulse text-orange-600 text-xl text-center font-semibold w-full'}>Loading...</div>
            </div>
        </div>
    )
}
