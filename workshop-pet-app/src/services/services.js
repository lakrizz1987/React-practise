const baseUrl = 'http://localhost:3030/jsonstore'

export const getAll = () => {
    return fetch(`${baseUrl}/pets`).then(res => res.json());
}