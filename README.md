### Weather API

The app implements two endpoints

```
Open http://localhost:8080/ returns hello world message.
Open http://localhost:8080/weather?city=somecity returns json with the current weather of the queried city.
```

## API KEY

This app makes use of openweather https://openweathermap.org/api so you will need to create a free account to get an API key.

Once you have your API key create a .env at the root of your app directoy an set the WEATHER_URL (you can copy the one on .env.example) then set WEATHER_KEY with the value you got from openweather.

## Requirements

Node `>=14.0.0`.\
NPM or Yarn

## Installation

```
git clone git@github.com:irwing-reza/simple-weather-api.git
cd simple-weather-api
npm install or yarn install
```

To start the server, run: `npm start` or `yarn start`.
By default it runs on `http://localhost:3000/`
Some examples of the available endpoints will be displayed in the node console

## Test

Run `npm test` or `yarn test`
