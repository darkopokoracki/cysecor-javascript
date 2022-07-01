let config = {
    'email': {
        required: true,
        isEmail: true,
        minLength: 5,
        maxLength: 30,
        exists: true
    },

    'password': {
        required: true,
        minLength: 7,
        maxLength: 30,
        matching: true // mora da se poklapa sa lozinkom u bazi podataka!!
    }
}

/*
    Simulacija baze podataka da bismo imali dodatnu validaciju za login
    email mora da postoji u bazi da bi neko ulogovao..
*/
let database = { 
    'row1': {
        email: 'johndoe@gmail.com',
        password: 'johndoe123'
    },
    'row2': {
        email: 'darko@gmail.com',
        password: '123456789'
    },
    'row3': {
        email: 'cysecor@gmail.com',
        password: 'sigurnost'
    }
}

let login = new LoginValidator(config, database);