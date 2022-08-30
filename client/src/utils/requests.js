const ROOT_URL = "http://localhost:8080";

const handleData = async (data) => {
  if (data.status === 200) return data.json();

  return null;
};

const handleError = (error) => {
  console.log(`Error: ${error}`);
};

export const loginUser = async (credentials) => {
  return fetch(`${ROOT_URL}/user/validate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then(handleData)
    .catch(handleError);
};
