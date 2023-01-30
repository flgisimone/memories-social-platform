const BASE_URL = "https://dummyjson.com";
const URL_RANDOMUSER = "https://randomuser.me"

const GET_DUMMYJSON = async (resources) => {
    const res = await fetch(`${BASE_URL}/${resources}`)
    const data = await res.json()

    return data;
}

const GET_RANDOMUSER = async (resources) => {
    const res = await fetch(`${URL_RANDOMUSER}/${resources}`)
    const data = await res.json()

    return data;
}

export {GET_DUMMYJSON, GET_RANDOMUSER}