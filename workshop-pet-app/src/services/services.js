const baseUrl = 'http://localhost:3030/jsonstore'

export const getAll = () => {
    return fetch(`${baseUrl}/pets`).then(res => res.json());
}

export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/pets/${id}`);
    const data = await response.json();
    return data;
}

export const updateOne = (id, data) => {
    return fetch(`${baseUrl}/pets/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    }).then(res => res.json());
}