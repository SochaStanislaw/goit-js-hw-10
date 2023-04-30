import Notiflix from 'notiflix';

function fetchError(error) {
  if (error.message === '404') {
    Notiflix.Notify.failure('Oops, there is no country with that name');
  }
}

export { fetchError };
