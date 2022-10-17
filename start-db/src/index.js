class SwapiService {
  _apiBase = "https://www.swapi.tech/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

const swapi = new SwapiService();

// console.log(swapi.getAllPeople());

// swapi.getAllPeople().then((people) => {
//   people.forEach((p) => {
//     console.log(p.name);
//   });
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

swapi.getAllPlanets().then((people) => {
  people.forEach((p) => {
    console.log(p.name);
  });
});

swapi.getPlanet(3).then((p) => {
  console.log(p.result.properties.name);
});
