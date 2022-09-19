export default async function getPlayersData(){
    let data = await fetch("http://localhost:3000/data/players.json").then(r => r.json())
    return {players: data}
}
  
  