export const update = async (details, id) => {
    const API = "http://localhost:3010/api/v1/"

    const params = {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    };

    const response = await fetch(API + "/users/" + id, params);
    const data = await response.json();
    const updateInfo = data.data.attributes;

    return { updateInfo }
};