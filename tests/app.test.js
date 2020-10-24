const app = require("../index");
const request = require("supertest");
const nock = require("nock");
const WEATHER_URL = process.env.WEATHER_URL;
const API_KEY = process.env.WEATHER_KEY;

afterAll((done) => {
  done();
});

describe("Tests routes", () => {
  it("/ returns Hello World!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World!");
  });

  it("get weather for dallas city", async () => {
    const mockResponse = {
      coord: { lon: -96.78, lat: 32.77 },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      base: "stations",
      main: {
        temp: 284.24,
        feels_like: 279.12,
        temp_min: 283.15,
        temp_max: 285.15,
        pressure: 1023,
        humidity: 66,
      },
      visibility: 10000,
      wind: { speed: 5.7, deg: 350 },
      clouds: { all: 75 },
      dt: 1603507398,
      sys: {
        type: 1,
        id: 3783,
        country: "US",
        sunrise: 1603456660,
        sunset: 1603496686,
      },
      timezone: -18000,
      id: 4684904,
      name: "Dallas",
      cod: 200,
    };
    nock(WEATHER_URL)
      .get(`/weather?q=dallas&appid=${API_KEY}`)
      .reply(200, mockResponse);
    const res = await request(app).get("/weather?city=dallas");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockResponse);
  });
});
