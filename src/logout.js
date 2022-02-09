export const logout = async () => {
    const API = "http://localhost:3010/api/v1/logout"

    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const response = await fetch(API, params);
    const data = await response.json();

    return { data }
};