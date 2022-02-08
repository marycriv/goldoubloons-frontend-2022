export const login = async () => {
    return { 
        "user": {
            "id": 31,
            "username": "mike",
            "display_name": "mike stoklasa",
            "password": "password",
            "icon": "https://whatstheirnetworth.com/wp-content/uploads/2020/09/Mike-Stoklasa.jpg",
            "admin": "true",
            "wallet": 100000
        }, 
        "relationships": [
            {
                "id": 42,
                "user_id": 31,
                "pressing_id": 136,
                "for_sale": true,
                "created_at": "2022-02-08T17:14:40.620Z",
                "updated_at": "2022-02-08T17:14:40.620Z"
            },
            {
                "id": 43,
                "user_id": 31,
                "pressing_id": 139,
                "for_sale": true,
                "created_at": "2022-02-08T17:14:40.645Z",
                "updated_at": "2022-02-08T17:14:40.645Z"
            },
            {
                "id": 48,
                "user_id": 31,
                "pressing_id": 142,
                "for_sale": true,
                "created_at": "2022-02-08T19:29:17.131Z",
                "updated_at": "2022-02-08T19:29:17.131Z"
            }
        ]
    }
};