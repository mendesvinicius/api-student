# Api Descomplica 
#### https://apidescomplica.herokuapp.com/
## Prerequisites 📋 
Commands for using docker in this project

Install Docker and Docker Compose on your machine https://www.docker.com/

## Quick Start 🚀
To use this project it is necessary to perform the following steps:

#### 1º Clone the repository on your machine
```bash
git clone https://github.com/ViniDevs/api-descomplica.git
```

#### 2º Mount the image and run
```bash
docker-compose build
```

#### 3º Run the docker-compose
```bash
docker-compose up
```

#### 4º Access the application
```console
http://localhost:80
```
## Operations - CRUD ☕ 

### Create Student
```console
mutation CreateStudent($data: CreateStudentInput!) {
    createStudent(data: {
      name: "John Doe"
      cpf: "123.123.123-12"
      email: "johndoe@example.com"
    }) {
      id
      name
      cpf
      email
    }
  }
```

### Read Students
```console
query ReadStudents {
  readStudents {
    id
    name
    cpf
    email
  }
}
```
### Read Student find by name or cpf or email
```console
query ReadStudents($student: ReadStudentInput) {
  readStudents(student: {
    name: "john Doe"
  }) {
    id
    name
    cpf
    email
  }
}
```

### Update Student
```console
mutation UpdateStudent($updateStudentData2: UpdateStudentInput!, $updateStudentId: String!) {
  updateStudent(data: {
    email: "john123@example.com"
  }, id: "123123123123123") {
    id
    name
    cpf
    email
  }
}
```
### Delete Student
```console
mutation DeleteStudent($deleteStudentId: String!) {
  deleteStudent(id: "123-123-123-123-123")
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
