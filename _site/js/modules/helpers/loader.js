export function loadingState(state) {
  const loader = document.querySelector('.loader')
  if (state === 'active') {
    loader.classList.add('loading')
    console.log('loader activated')
  } else {
    loader.classList.remove('loading')
    console.log('loader removed')
  }
}