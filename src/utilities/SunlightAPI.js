var sunlight = {
  getStates(){
    var url = 'https://openstates.org/api/v1/metadata/';
    return fetch(url).then((res) => res.json());
  }
}

module.exports = sunlight;
