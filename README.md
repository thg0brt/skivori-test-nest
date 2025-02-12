# Play Games - Back-End (NestJS)

	A REST API back-end application using NestJS, built by Thiago Brito for Skivori FullStack Developer test.

## Setup

- Install the Node.js and NestJS framework
- Clone the repository;
- Install dependencies (`npm install`);
- Run application (`npm run start:dev`);

## HTTP REQUESTS

### GET `/get-games`

Return all games from game-data.json

### GET `/search-games/:search`

Search games by title from game-data.json

### POST `/play`

Return the amount of coins the player won/lost and the result of the spin.
