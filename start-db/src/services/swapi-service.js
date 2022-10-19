export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }
    // console.log( await res.json() )
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map( this._transformPlanet )
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const idRegExp = /\/(\d*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period, 
      diameter: planet.diameter
    }
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      constInCredits: starship.constInCredits,
      length: starship.length,
      crew: starship.crew,
      passenger: starship.passenger,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transform(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    }
  }
}

const swapi = new SwapiService();

swapi.getPlanet(8).then(res => console.log(res));

// const swapi = new SwapiService();
// console.log('43');

// swapi.getAllPeople().then(people => people.forEach(p=> console.log(p.name)))
// swapi.getPerson(3).then(res => console.log(res.name))

// swapi.getPerson(3).then(res => console.log(res))

// swapi.getPerson(3).then((p) => {
//   console.log(p.result.properties.name);
// });

// swapi.getPerson(3).then((p) => {
//   console.log(p.result.properties.name);
// });


// swapi.getPerson(3).then((p) => {
//   console.log(p.result.properties.name);
// });

// swapi.getPerson(3).then((p) => {
//   console.log(p.result.properties.name);
// });

// swapi.getAllStarships().then((people) => {
//   people.forEach((p) => {
//     console.log(p.name);
//   });
// });

// swapi.getStarship(3).then((p) => {
//   console.log(p.result.properties.name);
// });

// swapi.getAllPlanets().then((people) => {
//   people.forEach((p) => {
//     console.log(p.name);
//   });
// });

// swapi.getPlanet(3).then((p) => {
//   console.log(p.result.properties.name);
// });