const baseUrl = 'http://localhost:3030/jsonstore';

export const addPet = async () => {
    try {
        const response = await fetch(`${baseUrl}/pets`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' }
        });
        if (response.ok === false) {
            const errData = await response.json();
            throw new Error(errData.message)
        }
        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message)
    }

    
}

export const getAll = () => {
    return fetch(`${baseUrl}/pets`).then(res => res.json());
};

export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/pets/${id}`);
    const data = await response.json();
    return data;
};

export const updateOne = (id, data) => {
    return fetch(`${baseUrl}/pets/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    }).then(res => res.json());
};

export const loginService = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (response.ok === false) {
            const resErr = await response.json()
            throw new Error(resErr.message)
        }
        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message)
    }


}