School Management API - Documentation
Base URL: http://localhost:3000/ (or your hosted URL)

1.  POST /addSchool

    Description: Add a new school to the database.
    URL: /addSchool
    Method: POST
    Headers:
    Content-Type: application/json
    Body Example:
    {
    "name": "Greenwood High School",
    "address": "123 Forest Lane, Springfield",
    "latitude": 40.73061,
    "longitude": -73.935242
    }
    Success Response:
    {
    "message": "School added successfully",
    "schoolId": 1
    }

2.  GET /listSchools

    Description: List schools sorted by distance from user location.
    URL: /listSchools?latitude=40.73061&longitude=-73.935242
    Method: GET
    Query Parameters:
    latitude: user latitude (required)
    longitude: user longitude (required)
    Success Response:
    [
    {
    "id": 1,
    "name": "Greenwood High School",
    "address": "123 Forest Lane, Springfield",
    "latitude": 40.73061,
    "longitude": -73.935242,
    "distance": 0.0
    },
    ...
    ]
