const apiUrl = "http://localhost:3333/api";

const get = (uri: string, data, successCallback, failureCallback) => {
  return fetch(`${apiUrl}${uri}?${JSON.stringify(data)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response: any) => {
      if (response.status === 401) {
        window.location.href = "/login";
      } else {
        return response.json().then((json) => {
          if (successCallback) return successCallback(json);
        });
      }
    })
    .catch((err) => {
      console.log(uri);
      console.log(err);
      if (failureCallback) return failureCallback(err);
    });
};

const post = (uri, data, successCallback, failureCallback) => {
  return fetch(`${apiUrl}${uri}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 401) {
        window.location.href = "/login";
      } else if (response.status >= 400) {
        if (failureCallback) return failureCallback(response);
      } else {
        return response
          .json()
          .then((json) => {
            if (successCallback) return successCallback(json);
          })
          .catch(() => {
            if (successCallback) return successCallback();
          });
      }
    })
    .catch((err) => {
      console.log(uri);
      console.log(err);
      if (failureCallback) return failureCallback(err);
    });
};

export default { get, post };
