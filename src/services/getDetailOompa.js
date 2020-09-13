
const fromApiResponseToOompa = apiResponse => {

    const { errorMessage, first_name, last_name, profession, gender, description, image } = apiResponse
    if (!errorMessage) {
        return ({ first_name, last_name, profession, gender, description, image })
    } else {
        return ({ error: errorMessage })
    }
}

export default function getSingleOompa(id) {
    const API_URL = "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas"

    return fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(fromApiResponseToOompa)
        .catch(err => ({ error: err }))
}