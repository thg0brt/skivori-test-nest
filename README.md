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

## Use of ChatGPT as AI code editor/assistant.
 - Used it to help me fix some errors while installing Node on my computer. I used Chocolatey, but it wasn't properly installed.
 - Used it in error solving, such as the first deploy of the backend using Render, where I hadn’t configured the Render web service properly.
 - Used it to help me enable imports and reading of .json files in the NestJS application.
 - Used it in the middleware to create a regex that allows only alphabetic characters and numerals in the 'search-games' method.
