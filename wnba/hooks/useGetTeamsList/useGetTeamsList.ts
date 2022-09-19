export default async function getTeamsListData(){
  let data = await fetch("http://localhost:3000/data/teams.json").then(r => r.json())
  return {teams: data}
}

