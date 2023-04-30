function fetchCountries(name) {
  const urlAPI = 'https://restcountries.com/v3.1';

  return fetch(
    `${urlAPI}/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchCountries };
