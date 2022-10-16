// fetch('https://www.swapi.tech/api/people/1').then((res)=>{
//   return res.json()
// }).then((body)=>{
//   console.log(body)
// })\

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url} received ${res.status}`);
  }

  const body = await res.json();
  return body
}

getResource('https://www.swapi.tech/api/people/123123').then((body)=>{
  console.log(body)
  })
  .catch((err)=>{
    console.error(err)
  } )

// let someFetch = fetch('https://www.swapi.tech/api/people/1')
// console.log(someFetch)
console.log('some text')