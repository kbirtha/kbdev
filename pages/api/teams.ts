import getTeamsListData from '../../hooks/useGetTeamsList/useGetTeamsList'
export default async function getTeamsListHandler(req, res){
    res.status(200).json(await getTeamsListData())
}