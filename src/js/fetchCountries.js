const resultRef = document.getElementById('result');

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;population;languages;flag`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
}

export default fetchCountries;
