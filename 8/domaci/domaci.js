let config = {
    'ime_prezime': {
        required: true,
        minlength: 3,
        maxlength: 50
    },

    'korisnicko_ime': {
        required: true,
        minlength: 5,
        maxlength: 50
    },

    'email': {
        required: true,
        email: true, // Da li je ovo email polje
        minlength: 5,
        maxlength: 50
    },

    'broj_telefona': {
        minlength: 9,
        maxlength: 13
    },

    'zip': {
        required: true,
        minlength: 4,
        maxlength: 5,
        integer: true
    },

    'lozinka': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'ponovi_lozinku'
    },

    'ponovi_lozinku': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'lozinka'
    }
}

let validator = new Validator(config); // saljemo config