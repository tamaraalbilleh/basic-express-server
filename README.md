401 lab 02 basic-express-server
# LAB - 02
## basic-express-server
### Author: Tamara Al-billeh

* [deployment for main branch ](https://tamara-basic-express-server.herokuapp.com/) .
* [submission PR](https://github.com/tamaraalbilleh/basic-express-server/pulls) .
* [tests report](https://github.com/tamaraalbilleh/basic-express-server/actions) .
 
### Setup

#### `.env` requirements

- `PORT` - 5000

#### Running the app

- `npm start`
- Endpoint: `/`
  - Returns message

    ```

    'welcome to home page!';

    ```
- Endpoint: `/person?name=name provided`
  - Returns an Object

    ```

    {
      "name": "name provided"
    }

    ```
- Endpoint: `/person`
  - Throws an error 500
  - Returns an Object

    ```

    {
        "status": 500,
        "message": "something went wrong ",
        "rout": "/err",
    }

    ```
- Endpoint: **anything else ..**
  - Returns an error 404
  - Returns an Object

    ```

    {
        "status": 404,
        "message": "Sorry , Page not Found"
    }

    ```
#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

#### UML

(Created with [diagrams](https://app.diagrams.net/))

![UML Diagram](./assets/uml.png)