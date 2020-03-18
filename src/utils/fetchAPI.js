const buildUrl = (endpoint, query) => {
  const url = new URL(endpoint);

  Object.entries(query)
    .forEach(([key, value]) => url.searchParams.append(key, value));

  return url;
};

const buildHeaders = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

const handleErrors = response => (
  response.json()
);

const fetchApi = (endpoint, query = {}) => fetch(buildUrl(endpoint, query))
  .then(response => (
    handleErrors(response)
  ))
  .then(response => Promise.resolve(response))
  .catch(error => Promise.reject(error));

export const postApi = (endpoint, query, httpMethod = 'POST', options = {}) => fetch(buildUrl(endpoint, query), {
  headers: buildHeaders(),
  method: httpMethod,
  ...options,
})
  .then(response => (
    handleErrors(response)
  ))
  .then(response => Promise.resolve(response))
  .catch(error => Promise.reject(error));

export default fetchApi;
