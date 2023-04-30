// name         - z tej zagnieżdżonej właściwości potrzebujemy
//              pełną nazwę kraju pod name.official
// capital      - stolica (tablica)
// population   - liczba ludności
// flags        - z tej zagnieżdżonej właściwości potrzebujemy link do ilustracji
//              przedstawiającej flagę w formacie wektorowym pod flags.svg
// languages    - tablica języków

// IMPORTS:
import './css/styles.css';
import { fetchCountries } from './JS/fetchCountries';
import { fetchError } from './JS/fetchError';
import { showInfo } from './JS/showInfoOfCountry';
import { showList } from './JS/showListOfCountries';

// all modules form Notiflix:
import Notiflix from 'notiflix';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

// query selectors:
const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

// add event listner:
searchBox.addEventListener('input', debounce(countryFinder, DEBOUNCE_DELAY));

let typedCountry = '';

function countryFinder(event) {
  event.preventDefault();

  typedCountry = event.target.value.trim();

  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  if (typedCountry) {
    fetchCountries(typedCountry).then(showResult).catch(fetchError);
  }
}

function showResult(outputCountries) {
  if (!outputCountries) {
    return;
  }

  if (outputCountries.length > 10) {
    // jeżeli więcej niż 10 wyników to warning
    Notiflix.Notify.warning(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }

  if (outputCountries.length === 1) {
    // jeżeli 1 wynik to karta z info o kraju
    countryInfo.innerHTML = showInfo(outputCountries);
    return;
  }

  if (outputCountries.length >= 2 && outputCountries.length < 11) {
    // jeżeli 2-10 wyników to lista z nazwą i flagą kraju
    countryList.innerHTML = showList(outputCountries);
    return;
  }
}
