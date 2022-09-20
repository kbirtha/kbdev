### WNBA React Coding Exercise

**Requirements**

1. Bootstrap a new [NextJS](https://nextjs.org/) site by using `create-next-app`
2. Add [TailwindCSS](https://tailwindcss.com) as a project dependency
3. Create an API endpoint `/api/players`. The endpoint should respond with the contents of `./data/players.json`
4. Create an API endpoint `/api/teams`. The endpoint should respond with the contents of `./data/teams.json`
5. Update `./pages/index.js` to fetch the players and teams API **from the clients browser**. Create a "Loading" component that is visible until both endpoints have been fetched.
6. Create a `PlayerCard` component that matches the design of `./docs/player-card.png`. For each player in the `players` API response, render an instance of this component. (Roboto is the font being used)

> <img width="384" alt="player-card" src="https://user-images.githubusercontent.com/9437976/191074551-00efb290-6cde-4e9b-9db1-5a66ac122372.png">

8. Use Flex box to render the player cards in a grid, as well as a media query to set the amount of grid columns at various breakpoints

**Screenshots**

**_Mobile_**

<img width="310" alt="image" src="https://user-images.githubusercontent.com/9437976/191108410-0bf918f4-b058-42d6-a166-15b8e5a596ee.png">

**_Desktop_**

<img width="976" alt="image" src="https://user-images.githubusercontent.com/9437976/191108222-b151975d-206b-44cd-b8d2-1e7d16ef3a80.png">

