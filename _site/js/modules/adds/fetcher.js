// code credits to: https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939


const checkStatus = response => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = res => res.json();

const fetcher = {
  get: (path, params) =>
    fetch(path, params)
    .then(checkStatus)
    .then(parseJSON)
};
export {
  fetcher
};