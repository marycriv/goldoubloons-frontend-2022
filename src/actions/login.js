export const login = async (details) => {
    const API = "http://localhost:3010/api/v1/"

    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: details })
    };

    const response = await fetch(API + "login", params);
    const data = await response.json();
    const loginInfo = data;

    const response3 = await fetch(API + "pressings");
    const data3 = await response3.json();
    const pressingInfo = data3.data;

    return { loginInfo, pressingInfo }
};