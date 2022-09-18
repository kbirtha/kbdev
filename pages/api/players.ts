import getPlayersData from '../../hooks/useGetPlayers/useGetPlayers'
export default async function getPlayersHandler(req, res){
    res.status(200).json(await getPlayersData())
}