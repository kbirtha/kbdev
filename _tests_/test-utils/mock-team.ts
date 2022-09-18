export const mockTeam = (req, res, ctx) => {
    return res(
      ctx.json({"teams":[{
        "tid": 1610612737,
        "ta": "ATL",
        "city": "Atlanta",
        "name": "Hawks",
        "color": "#e13a3e",
        "logo": "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg"
      }]}),
    )
  }