# Dev-Tinder - ADR - intial draft

# Features

- create an account
- Login
- update your profile
- Feed page - explore
- send connection - explore
- see our matches
- see the request we have sent/recived
- update your profile

# Tech Planning

Microservices - 2

- FE -> React
- BE -> NodeJS + MongoDB

# LLD

DB Design

- user collection

  - firstName
  - lastName
  - emailID
  - password
  - age
  - gender

- connection request

  - fromUserId
  - toUserId
  - status -> pending/ accepted/ rejected/ ignored/ blocked

- API Design - REST API
  - GET
    - profile
    - requests
    - connections
  - POST
    - signUp
    - login
    - profile
    - sendRequest - ignore / intrested
    - reviewRequest - accept / reject
  - PUT / PATCH
    - profile
  - DELETE
    - profile
