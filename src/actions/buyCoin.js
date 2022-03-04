export const buyCoin = async (details, user_id) => {
    const API = "http://localhost:3010/api/v1/"

    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    };

    const response = await fetch(API + "coins", params);
    const data = await response.json();
    const purchaseInfo = data.data;

    const response2 = await fetch(API + "users/" + user_id);
    const data2 = await response2.json();
    const userInfo = data2.data.attributes;

    const response3 = await fetch(API + "pressings");
    const data3 = await response3.json();
    const pressingInfo = data3.data;

    const response4 = await fetch(API + "/coins");
    const data4 = await response4.json();
    const coinsInfo = data4.data;

    return { purchaseInfo, pressingInfo, userInfo, coinsInfo }
};