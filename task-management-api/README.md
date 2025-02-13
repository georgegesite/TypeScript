# REGISTER USER

POST http://localhost:3000/api/users/register
{
"name": "George Gesite",
"email": "georgesite33@gmail.com",
"password": "password123"
}

{
"user": {
"name": "George Gesite",
"email": "georgesite33@gmail.com",
"password": "$2a$08$kCpzCNnAVuo06qy9joWcs./ahY82P8W2haHayLlrxiZ/a6DV/fnFq",
"\_id": "679f5e0dec77ae67238d3c14",
"tokens": [
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlmNWUwZGVjNzdhZTY3MjM4ZDNjMTQiLCJpYXQiOjE3Mzg0OTc1NDl9.CEbXuPof_VweuGWrzUBfgr612CffKc0r-ycV51zIuM8",
"_id": "679f5e0dec77ae67238d3c16"
}
],
"\_\_v": 1
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlmNWUwZGVjNzdhZTY3MjM4ZDNjMTQiLCJpYXQiOjE3Mzg0OTc1NDl9.CEbXuPof_VweuGWrzUBfgr612CffKc0r-ycV51zIuM8"
}

# LOGIN USER

POST http://localhost:3000/api/users/login

{
"email": "georgesite33@gmail.com",
"password": "password123"
}
