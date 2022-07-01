class Validator {
    constructor(config) {
        this.elementsConfig = config;
        this.errors = {};

        this.generateErrorsObject();
        this.inputListener();
    }

    generateErrorsObject() { // Ovo nismo imali bez OOP
        for (let field in this.elementsConfig) {
            this.errors[field] = [];
        }
    }

    inputListener() {
        let inputSelector = this.elementsConfig;

        for (let field in inputSelector) {
            let selector = `input[name="${field}"]`;
            let element = document.querySelector(selector);

            element.addEventListener('input', this.validate.bind(this))
        }
    }

    validate(e) {
        let elFields = this.elementsConfig; // svap olja
        let field = e.target; // trenutno polje
        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;

        this.errors[fieldName] = []; // Ovo moram da saznam cemu sluzi

        if (elFields[fieldName].required) {
            if (fieldValue === '') {
                this.errors[fieldName].push('Polje ne sme biti prazno');
            }
        }

        if (elFields[fieldName].email) {
            if (!this.validateEmail(fieldValue)) {
                this.errors[fieldName].push('neispravna email adresa');
            }
        }

        if (fieldValue.length < elFields[fieldName].minlength || fieldValue.length > elFields[fieldName].maxlength) {
            this.errors[fieldName].push('Neispravan broj karaktera');
        }

        if (elFields[fieldName].integer) {
            if (!this.validateZip(fieldValue)) {
                this.errors[fieldName].push('Ne mozete da uneste nista osim brojeva!');
            }
        }

        if (elFields[fieldName].matching) {
            let matchingElement = document.querySelector(`input[name="${elFields[fieldName].matching}"]`);

            if (fieldValue !== matchingElement.value) {
                this.errors[fieldName].push('Lozinke se ne poklapaju');
            }

            // Sprecavamo konflikte
            if (this.errors[fieldName].length === 0) {
                this.errors[fieldName] = [];
                this.errors[elFields[fieldName].matching] = [];
            }
        }

        this.populateErrors(this.errors);
    }

    populateErrors(errors) {
        for (const elem of document.querySelectorAll('ul')) {
            elem.remove();
        }

        for (let key of Object.keys(errors)) {
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
            let errorsElement = document.createElement('ul');
            parentElement.appendChild(errorsElement);

            errors[key].forEach(error => {
                let li = document.createElement('li');
                li.innerText = error;
                
                errorsElement.appendChild(li);
            });
        }
    }

    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        
        return false;
    }

    validateZip(zip) {
        if(/^[0-9]+$/.test(zip)){
            return true;
        }

        return false;
    }
}