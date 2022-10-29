const team = {
  _players: [
    { firstName: "Tyler", lastName: "Herro", age: 22 },
    { firstName: "Jimmy", lastName: "Butler", age: 33 },
    { firstName: "Bam", lastName: "Adebayo", age: 25 },
  ],
  _games: [
    { opponent: "Chicago", teamPoints: 108, opponentPoints: 116 },
    { opponent: "Boston", teamPoints: 104, opponentPoints: 111 },
    { opponent: "Toronto", teamPoints: 112, opponentPoints: 109 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

// console.log(team.players); // step 5
// console.log(team.games); // step 6

// step 8
team.addPlayer("Udonis", "Haslem", 42);
console.log(team.players); // working

// step 9
team.addGame("Milwaukee", 100, 98);
console.log(team.games); // working
