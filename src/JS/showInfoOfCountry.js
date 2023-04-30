function showInfo(aboutCountry) {
  return aboutCountry
    .map(({ name, capital, population, flags, languages }) => {
      return `
              <p>${name.official}</p>
              <img src="${flags.svg}" width="200px">
              <p>Capital: ${capital}</p>
              <p>Population: ${population}</p>
              <p>Languages: ${Object.values(languages)}</p>`;
    })
    .join('');
}

export { showInfo };
