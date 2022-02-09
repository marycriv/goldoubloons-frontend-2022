export const signup = async (details) => {
    const API = "http://localhost:3010/api/v1/users"

    console.log({user: details})

    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: details})
    };

    const response = await fetch(API, params);
    const data = await response.json();
    const signupInfo = data;

    return { signupInfo }
};