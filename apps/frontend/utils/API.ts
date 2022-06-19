const apiUrl = "http://localhost:3333/api";

function getParams(data: object): string {
  return Object.keys(data)
    .map((key: string) => {
      return `${key}=${encodeURIComponent(String(data[key]))}`;
    })
    .join("&");
}

const get = async (
  uri: string,
  data: object,
  successCallback: (arg?: any) => void
) => {
  const params = getParams(data);
  return fetch(`${apiUrl}${uri}?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response: Response) => {
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
    });
};

const post = async (
  uri: string,
  data: object,
  successCallback: (arg?: any) => void
) => {
  return fetch(`${apiUrl}${uri}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response: Response) => {
      if (response.status === 401) {
        window.location.href = "/login";
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
    });
};

const login = async (data: object, successCallback: (arg?: any) => void) => {
  return fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response: Response) => {
      if (response.status === 401) {
        return successCallback(null);
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
      console.log("Login");
      console.log(err);
    });
};

export default { get, post, login };
