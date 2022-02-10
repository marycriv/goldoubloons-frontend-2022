export const sellCoin = async (coin_id, user_id) => {
    const API = "http://localhost:3010/api/v1/"

    const params = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const response = await fetch(API + "coins/" + coin_id, params);

    const response2 = await fetch(API + "users/" + user_id);
    const data2 = await response2.json();
    const userInfo = data2.data.attributes;
    const coinsInfo = data2.data.attributes.coins;
    console.log(coinsInfo)

    const response3 = await fetch(API + "pressings");
    const data3 = await response3.json();
    const pressingInfo = data3.data;

    return { pressingInfo, userInfo, coinsInfo }

};