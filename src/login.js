export const login = async (details) => {
    const API = "http://localhost:3010/api/v1/login"

    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: details })
    };

    const response = await fetch(API, params);
    const data = await response.json();
    const loginInfo = data;

    return { loginInfo }
};