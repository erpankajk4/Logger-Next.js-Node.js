./folderstructure.ps1

npm install bcrypt dotenv express mongoose jsonwebtoken cors

npm install --save-dev nodemon jest supertest


erpankajk4 - ftgRRa7zVGDeWe6j


{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTdmNzdiN2ZkM2RhOTc0MjVjYzE1YSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI5NjI0MDU2LCJleHAiOjE3Mjk2Mjc2NTZ9.mXoeRlBwc6dYLgtwBN_j9ULeOTedNYTsBU8SYolbKzY",
    "user": {
        "id": "6717f77b7fd3da97425cc15a",
        "username": "er.pankaj.k4@gmailo.com",
        "role": "user"
    }
}

{
    "username": "er.pankaj.k4@gmailo.com",
    "password": "12345678"
}

{
    "username": "admin@gmail.com",
    "password": "12345678",
    "role": "admin"
}

router.get('/', authenticate, getAllUsers);