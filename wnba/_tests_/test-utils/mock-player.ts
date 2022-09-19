export const mockPlayer = (req, res, ctx) => {
    return res(
      ctx.json({"players":[{
        "pid": 203991,
        "ln": "Capela",
        "fn": "Clint",
        "ta": "ATL",
        "num": "15",
        "pos": "C",
        "pts": 13.3,
        "reb": 14.2,
        "ast": 1,
        "stl": 0.8,
        "headshot": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203991.png",
        "slug": "clint-capela"
      }]}),
    )
  }
