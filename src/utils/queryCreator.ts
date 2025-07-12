const generateQuery = (payload: any) => {
  return Object.entries(payload)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

export default generateQuery;
