class LoginValidator {
    constructor(config, database) {
        this.config = config;
        this.database = database; // Simulacija baze
        this.errors = {};

        this.makeErrorsObject();
        this.makeListener();
    }

    makeErrorsObject() {
        for (let field in this.config) {
            this.errors[field] = [];
        }
    }

    makeListener() {
        for (let field in this.config) {
            let input = document.querySelector(`input[name="${field}"]`);
            input.addEventListener('input', this.validate.bind(this));
        }
    }

    validate(e) {
        let input = e.target;
        let inputName = input.getAttribute('name');
        let inputValue = input.value;

        this.errors[inputName] = []; // resetuje greske polja na prazan string!

        if (this.config[inputName].required) {
            if (inputValue === '') {
                this.errors[inputName].push('Polje ne sme biti prazno');
            }
        }

        if (inputValue.length < this.config[inputName].minLength || inputValue.length > this.config[inputName].maxLength) {
            this.errors[inputName].push('Neispravan broj karaktera');
        }

        if (this.config[inputName].isEmail) {
            if (!this.validateEmail(inputValue)) {
                this.errors[inputName].push('Email adresa nije validna!');
            } 
        }

        if (this.config[inputName].exists) {
            if (!this.validateEmailExists(inputValue)) {
                this.errors[inputName].push('Email adresa ne postoji u bazi podataka!');
            }
        }

        if (this.config[inputName].matching) {
            let email = document.querySelector(`input[name="email"]`).value;

            if (!this.validatePasswordMatching(email, inputValue)) {
                this.errors[inputName].push('Lozinke se ne poklapaju!');
            }
        }

        this.populateErrors(this.errors);
    }

    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        
        return false;
    }

    validateEmailExists(email) {
        let flag = 0;

        for (let row in this.database) {
            if (this.database[row].email === email) {
                flag = 1;
            }
        }

        if (flag === 1) return true;
        if (flag === 0) return false;
    }

    validatePasswordMatching(email, password) {
        // email nam treba da budemo sigurnio da je password bas za taj email!
        let flag = 0;

        for (let row in this.database) {
            if (this.database[row].email === email) {
                // sada tek proveravamo lozinku
                if (this.database[row].password === password) {
                    flag = 1;
                }
            }
        }

        if (flag === 1) return true;
        if (flag === 0) return false;
    }

    populateErrors(errors) {
        for (const errorDiv of document.querySelectorAll('.errors')) {
            errorDiv.remove();
        }

        for (let key of Object.keys(errors)) {
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
            let errorsDiv = document.createElement('div');
            errorsDiv.classList.add('errors');
            parentElement.appendChild(errorsDiv);

            errors[key].forEach(error => {
                let errorPara = document.createElement('p');
                errorPara.innerText = error;
                errorPara.style.color = 'red';

                errorsDiv.appendChild(errorPara);
            });
        }
    }
}