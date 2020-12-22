const endpoint = 'https://conduit.productionready.io/api';
const standardReq = async ({ path, method, body, token, }) => {
  const reqPath = `${endpoint}/${path}`;
  let headers = {
    'content-type': 'application/json',
  };
  if (token) {
    headers = Object.assign(Object.assign({}, headers), { authorization: `Token ${token}` });
  }
  try {
    const req = await fetch(reqPath, {
      credentials: 'omit',
      headers,
      method,
      body,
      mode: 'cors',
    });
    const data = await req.json();
    return data;
  }
  catch (errors) {
    console.error(errors);
    return { errors };
  }
};

export { standardReq as s };
