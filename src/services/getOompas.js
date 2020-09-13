const getOompas = ({ page = 0 } = {}) => {
    const apiURL = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`

    return fetch(apiURL)
        .then((res) => res.json())
        .then(fromResponseToOompas)
        .catch(err => ({ error: err }))
}

const fromResponseToOompas = (apiResponse) => {
    const { results = [] } = apiResponse
    if (Array.isArray(results)) {
        const oompas = results.map(oompa => {
            const { first_name, last_name, profession, image, gender, id } = oompa
            return ({ first_name, last_name, profession, image, gender, id })
        })
        return oompas
    }
    return []
}
export default getOompas