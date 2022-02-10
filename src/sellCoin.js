export const sellCoin = async (id) => {
    const API = "http://localhost:3010/api/v1/coins/"

    const params = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const response = await fetch(API + id, params);

};