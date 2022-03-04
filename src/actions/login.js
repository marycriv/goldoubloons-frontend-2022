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

    const obj = {};

    let response = await fetch(API + "login", params)
    const data = await response.json();
    const loginInfo = data;
    console.log(loginInfo)

    const response2 = await fetch(API + "pressings");
    const data2 = await response2.json();
    const pressingInfo = data2.data;

    const response3 = await fetch(API + "coins");
    const data3 = await response3.json();
    const coinsInfo = data3.data;

    console.log(loginInfo.status)

    if (loginInfo.status == 200) {
      return { 
          loginInfo, 
          pressingInfo, 
          coinsInfo
      }
    } else {
      return { loginInfo }
    }
    
};