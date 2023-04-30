function showList(ofCountires) {
  return ofCountires
    .map(ofCountires => {
      return `<li class="countryFinder-list">
      <p class="countryFinder-name">${ofCountires.name.official}</p>
      <div class="countryFinder-flag">
      <img src="${ofCountires.flags.png}" width="150px">
      </div>
      </li>`;
    })
    .join('');
}

export { showList };
