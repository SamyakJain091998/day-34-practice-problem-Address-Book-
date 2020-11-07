class Address_Book{
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.eMail = params[7];
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        }
        else throw 'firstName is incorrect';
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegex.test(lastName)) {
            this._lastName = lastName;
        }
        else throw 'lastName is incorrect';
    }

    get address() {
        return this._address;
    }

    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9_ @#$%^&*()]{3,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else throw 'address is incorrect';
    }

    get city() {
        return this._city;
    }

    set city(city) {
        let cityRegex = RegExp('^[a-zA-Z0-9_ @#$%^&*()]{3,}$');
        if (cityRegex.test(city)) {
            this._city = city;
        }
        else throw 'city is incorrect';
    }

    get state() {
        return this._state;
    }

    set state(state) {
        let stateRegex = RegExp('^[a-zA-Z0-9_ @#$%^&*()]{3,}$');
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else throw 'state is incorrect';
    }

    get zip() {
        return this._zip;
    }

    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else throw 'zip is incorrect';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[1-9]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw 'phoneNumber is incorrect';
    }

    get eMail() {
        return this._eMail;
    }

    set eMail(eMail) {
        this._eMail = eMail;
    }

    toString() {
        return "firstName => " + this.firstName + ", lastName => " + this.lastName + ", address => " + this.address
            + ", city => " + this.city + ", state => " + this.state + ", zip => " + this.zip + ", phoneNumber => " + this.phoneNumber
            + ", eMail => " + this.eMail;
    }
}

let addressBook;

try {
    addressBook = new Address_Book("Samyak", "Jain", "Dusshehra @Maidan", "Ujjain",
        "Madhya Pradesh", 560100, 7580813216, "abc@gmail.com");
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}
