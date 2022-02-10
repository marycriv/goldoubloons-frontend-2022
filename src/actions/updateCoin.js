export const updateCoin = async (details, user_id, coin_id) => {
    const API = "http://localhost:3010/api/v1/"

    // create new coin relationship
    const params = {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    };

    const response2 = await fetch(API + "coins/" + coin_id, params);
    const data2 = await response2.json();
    const purchaseInfo = data2.data;

    const response3 = await fetch(API + "users/" + user_id);
    const data3 = await response3.json();
    const userInfo = data3.data.attributes;
    const coinsInfo = data3.data.attributes.coins;
    console.log(coinsInfo)


    const response4 = await fetch(API + "pressings");
    const data4 = await response4.json();
    const pressingInfo = data4.data;

    return { purchaseInfo, pressingInfo, userInfo, coinsInfo }
};