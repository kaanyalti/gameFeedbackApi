# Starting the server
Before you can start the server you first have to install the dependencies by running
```
npm install
```
in the console

After that you have to run the database migrations. To do so execute the command below
```
node_modules/.bin/sequelize db:migrate
```

After you install the dependencies and run the migrations you can start the application by running:
```
npm start
```

# API Endpoints
I tried adding all the basic CRUD operations for the feedbacks; however, due to time constraints I couldn't implement update and delete functionalities. Available endpoints are

```
GET /feedbacks
GET /feedbacks/:id
POST /feedbacks
GET /feedbacks/rating/:rating
```

**GET /feedbacks**
Returns an array of feedbacks in JSON format
```
[
    {
        "id": 1,
        "comment": "testComment",
        "rating": 5,
        "userId": 2,
        "gameSessionId": 1,
        "createdAt": "2020-10-26T01:38:53.720Z",
        "updatedAt": "2020-10-26T01:38:53.720Z"
    },
    {
        "id": 2,
        "comment": "testComment",
        "rating": 5,
        "userId": 1,
        "gameSessionId": 1,
        "createdAt": "2020-10-26T01:38:59.036Z",
        "updatedAt": "2020-10-26T01:38:59.036Z"
    },
    {
        "id": 3,
        "comment": "testComment",
        "rating": 5,
        "userId": 3,
        "gameSessionId": 1,
        "createdAt": "2020-10-26T01:45:09.683Z",
        "updatedAt": "2020-10-26T01:45:09.683Z"
    },
    {
        "id": 4,
        "comment": "testComment",
        "rating": 5,
        "userId": 3,
        "gameSessionId": 3,
        "createdAt": "2020-10-26T01:45:14.762Z",
        "updatedAt": "2020-10-26T01:45:14.762Z"
    },
    {
        "id": 5,
        "comment": "testComment",
        "rating": 5,
        "userId": 3,
        "gameSessionId": 5,
        "createdAt": "2020-10-26T01:45:18.033Z",
        "updatedAt": "2020-10-26T01:45:18.033Z"
    },
    {
        "id": 6,
        "comment": "testComment",
        "rating": 3,
        "userId": 3,
        "gameSessionId": 7,
        "createdAt": "2020-10-26T01:46:11.946Z",
        "updatedAt": "2020-10-26T01:46:11.946Z"
    }
]
```

**GET /feedbacks/:id**
Returns a feedback provided a valid id
```
{
    "id": 1,
    "comment": "testComment",
    "rating": 5,
    "userId": 2,
    "gameSessionId": 1,
    "createdAt": "2020-10-26T01:38:53.720Z",
    "updatedAt": "2020-10-26T01:38:53.720Z"
}
```

**POST /feedbacks**
Creates a feedback with the provided data in the request body
Sample request body:
```
{
    "comment": "testComment",
    "rating": 3,
    "userId": 3,
    "gameSessionId": 7
}
```
Returns the created feedback object
```
{
    "id": 6,
    "comment": "testComment",
    "rating": 3,
    "userId": 3,
    "gameSessionId": 7,
    "updatedAt": "2020-10-26T01:46:11.946Z",
    "createdAt": "2020-10-26T01:46:11.946Z"
}
```
**GET /feedbacks/rating/:rating**
Returns feedbacks that have the rating provided in the query params
```
[
    {
        "id": 1,
        "comment": "testComment",
        "rating": 5,
        "userId": 2,
        "gameSessionId": 1,
        "createdAt": "2020-10-26T01:38:53.720Z",
        "updatedAt": "2020-10-26T01:38:53.720Z"
    },
    {
        "id": 2,
        "comment": "testComment",
        "rating": 5,
        "userId": 1,
        "gameSessionId": 1,
        "createdAt": "2020-10-26T01:38:59.036Z",
        "updatedAt": "2020-10-26T01:38:59.036Z"
    },
    {
        "id": 3,
        "comment": "testComment",
        "rating": 5,
        "userId": 3,
        "gameSessionId": 1,
        "createdAt": "2020-10-26T01:45:09.683Z",
        "updatedAt": "2020-10-26T01:45:09.683Z"
    },
    {
        "id": 4,
        "comment": "testComment",
        "rating": 5,
        "userId": 3,
        "gameSessionId": 3,
        "createdAt": "2020-10-26T01:45:14.762Z",
        "updatedAt": "2020-10-26T01:45:14.762Z"
    },
    {
        "id": 5,
        "comment": "testComment",
        "rating": 5,
        "userId": 3,
        "gameSessionId": 5,
        "createdAt": "2020-10-26T01:45:18.033Z",
        "updatedAt": "2020-10-26T01:45:18.033Z"
    }
]
```

# Possible improvements
- Adding tests. Couldn't add tests due to time constraints
- Adding authentication
- Implementing CQRS by having a read view ready to aleviate the load on the database
- Separating the data layer and the domain layer. Currently domain is tightly coupled to the data layer. It would be better to have a separate domain model without thinking of the persistance layer limitations.
  - For example. I wanted to add users and game sessions as separate models
  - Because of unfamiliarity with the ORM I could properly implement this approach
  - If I were able to represent this relation in the domain layer, I would be more relaxed when it came to persistance layer implementation. 
  - Representation in the database would not have to be normalized.
