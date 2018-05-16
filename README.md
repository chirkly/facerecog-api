# Magic Camera API
This is a proof of concept API that uses Node.js / Express to connect the Magic Camera front end to the Clarifai API and a PostgreSQL database.

See my [Magic Camera](https://github.com/chirkly/facerecog) page for more information on the full app.

# Dependencies
A PostgreSQL database will also need to be establed with the following tables and columns:

- users
  - id - smallint (Primary Key)
  - name - varchar(100)
  - email - text (Unique Key)
  - entries - bigint
  - joined - timestamp
- login
  - id - smallint (primary Key)
  - hash - varchar(100)
  - email - text (Unique Key)
  
A free Clarifai API key will also be needed, and can be obtained at https://www.clarifai.com.

All other dependencies are in the package.json file and can be installed through npm.



# Endpoints
The following endpoints are available:
- /signin - compares the entered e-mail address and the hash of the entered password with the PostgreSQL database login table for authentication
- /register - if the entered e-mail address is unique, then the e-mail address and hash of the password are added to the login table and the user name, e-mail address and time stamp are added to the users database; if successful, the user is then signed in
- /rankup - increases the users rank by 1 after searching for an image
- /rankreset - resets the rank to zero
- /imageurl - makes the API call to Clarafai for face recognition
- / profile/:id - returns the users pforile; not currently used in the front end
