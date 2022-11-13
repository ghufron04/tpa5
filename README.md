## AddUser = Register (menambah user)

| Atrributes    | Tipe Data 	| Deksripsi                    |
| ------------- | ---------	| ---------------------------- |
| name	        | String    	| nama akun pengguna           |
| email         | String    	| untuk autentifikasi pengguna |
| password      | String    	| untuk autentifikasi pengguna |
| address       | String,Number	| alamat user	               |

Request :

- Method   : POST
- Endpoint : user/register
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```javascript
    {
        "username" : "string",
        "email" : "string",
	"password" : "string",
        "address" : { 
		"name" : "string",
		"no" : "number",
		"kecamatan" : "string"
		}
    }
```

- Response :

```javascript
   {
  "message": "data has been created!!"
}
```

## Login

| Atrributes | Tipe Data | Deksripsi                    |
| ---------- | --------- | ---------------------------- |
| name       | String    | nama akun pengguna           |
| password   | String    | untuk autentifikasi pengguna |

Request :

- Method : POST
- Endpoint : user/login
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```javascript
    {
        "username" : "string",
        "password" : "string"
    }
```

- Response :

```javascript
   {
  "message": "Login Succesful",
  "token": "jwt token here"
}
```

## Tugas Attributes = Todo Attributes

| Attributes    | Tipe Data | Deksripsi                                   |
| ------------- | --------- | ------------------------------------------- |
| name	        | String    | Nama tugas/todo	                          |
| isDone        | Boolean   | status tugas/todo			          |
| user 		| String    | refrence ke data user pembuat tugas/todo	  |

# AddTugas/Todo

Request :

- Method : POST
- Endpoint : tugas/add
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```javascript
    {
        "name" : "string",
        "isDone" : Boolean,
        "user" : "string"
    }
```

- Response :

```javascript
   {
  "doc": {
    "name": "String",
    "isDone": Boolean,
    "user": "String",
    "_id": "String",
    "__v": 0
  },
  "message": "tugas has been created"
}
```

# GetAllTugas/Todo

Request :

- Method : GET
- Endpoint : /tugas/
- Header :
  - Accept : application/json
- Response :

```javascript
   {
  	"doc": [
    	{
    	  "_id": "String",
    	  "name": "String",
    	  "isDone": Boolean,
    	  "user": {
      	  "_id": "String",
     	   "name": "String"
     	 },
    	  "__v": 0
    }
  "message": "all tugas has been displayed"
}
```

# GetTugasById/TodoById

Request :

- Method : GET
- Endpoint : /tugas/:id
- Header :
  - Accept : application/json

Response :

```javascript
   {
  "doc": {
    "_id": "String",
    "name": "String",
    "isDone": Boolean,
    "user": "String",
    "__v": 0
  },
  "message": "tugas has been found"
}
```

# UpdateTugasById

Request :

- Method : PUT
- Endpoint : /tugas/:id
- Header :
  - Content-Type : application/json
  - Accept : application/json

Body :

```javascript
    {
  	"name" : "string",
	"isDone: Boolean,
	"user" : "String"
    }
```

Response :

```javascript
   {
  	"doc": {
   	 "acknowledged": Boolean,
   	 "modifiedCount": number,
   	 "upsertedId": null,
   	 "upsertedCount": number,
   	 "matchedCount": number
  },
  "message": "tugas has been updated"
}
```

## DeleteTugasById

Request :

- Method : DELETE
- Endpoint : /tugas/:id
- Header :
  - Accept: application/json

Response :

```javascript
    {
        message: "tugas has been deleted"
    }
```
## DeleteAllTugas

Request :

- Method : DELETE
- Endpoint : /tugas/:id
- Header :
  - Accept: application/json

Response :

```javascript
    {
        message: "tugas has been deleted"
    }
```

