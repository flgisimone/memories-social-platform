const BASE_URL = "https://dummyjson.com";
const URL_RANDOMUSER = "https://randomuser.me"

const GET = async (resources) => {
    const res = await fetch(`${BASE_URL}/${resources}`)
    const data = await res.json()

    return data;
}

const GET_RANDOMUSER = async (resources) => {
    const res = await fetch(`${URL_RANDOMUSER}/${resources}`)
    const data = await res.json()

    return data;
}

const POST = async (resources, body) => {
    const res = await fetch(`${BASE_URL}/${resources}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)})

    const data = await res.json()
    
    return data;
}

export {GET, GET_RANDOMUSER, POST}