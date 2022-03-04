export const auctionPurchase = async (details, user_id, coin_id) => {
    const API = "http://localhost:3010/api/v1/"

    console.log("DEETZ", details)

    // delte original coin relationship
    const deleteParams = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const response = await fetch(API + "coins/" + coin_id, deleteParams);

    // create new coin relationship
    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    };

    const response2 = await fetch(API + "coins", params);
    const data2 = await response2.json();
    const purchaseInfo = data2.data;

    const response3 = await fetch(API + "users/" + user_id);
    const data3 = await response3.json();
    const userInfo = data3.data.attributes;

    const response4 = await fetch(API + "pressings");
    const data4 = await response4.json();
    const pressingInfo = data4.data;

    const response5 = await fetch(API + "/coins");
    const data5 = await response5.json();
    const coinsInfo = data5.data;
    console.log(coinsInfo)

    return { purchaseInfo, pressingInfo, userInfo, coinsInfo }
};