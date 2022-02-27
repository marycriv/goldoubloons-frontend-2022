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

    let response = await fetch(API + "login", params)
    const data = await response.json();
    const loginInfo = data;

    const response2 = await fetch(API + "pressings");
    const data2 = await response2.json();
    const pressingInfo = data2.data;

    if (loginInfo.status == 200) {
      return { 
          loginInfo, 
          pressingInfo 
      }
    } else {
      console.log("error!!!!") 
    }
    
};