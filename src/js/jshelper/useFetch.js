

export function urlBuilder(dataKey){
  return `${process.env.API_URL}/${dataKey}`
}

export function fetchData(dataKey, action, bodyValue) {
  console.log(process.env.API_URL)
    return fetch(urlBuilder(dataKey), {
      method: action,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyValue)
    }).then(res => res.json())
}
