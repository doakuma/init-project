const API_HOST = process.env.NEXT_PUBLIC_API_URL;

// GET
const getData = async (apiUrl) => {
  const fetchUrl = `${API_HOST}${apiUrl}`;
  const res = await fetch(fetchUrl);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// CREATE
const createData = async (apiUrl, fetchData) => {
  const fetchUrl = `${API_HOST}${apiUrl}`;
  const fetchParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fetchData),
  };
  const res = await fetch(fetchUrl, fetchParams);
  const data = await res.json();
  return data;
};

//UPDATE
const updateData = async (apiUrl, fetchData, fetchTarget) => {
  const fetchUrl = `${API_HOST}${apiUrl}/${fetchTarget}`;
  const fetchParams = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fetchData),
  };
  const res = await fetch(fetchUrl, fetchParams);
  const data = await res.json();
  return data;
};

//DELETE

export { getData, createData, updateData };
