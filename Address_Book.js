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

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName){
        this._firstName = firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    get address(){
        return this._address;
    }

    set address(address){
        this._address = address;
    }

    get city(){
        return this._city;
    }

    set city(city){
        this._city = city;
    }

    get state(){
        return this._state;
    }

    set state(state){
        this._state = state;
    }

    get zip(){
        return this._zip;
    }

    set zip(zip){
        this._zip = zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }

    get eMail(){
        return this._eMail;
    }

    set eMail(eMail){
        this._eMail = eMail;
    }

    toString(){
        return "firstName => " + this.firstName + ", lastName => " + this.lastName + ", address => " + this.address
        + ", city => " + this.city + ", state => " + this.state + ", zip => " + this.zip + ", phoneNumber => " + this.phoneNumber
        + ", eMail => " + this.eMail;
    }
}

let addressBook = new Address_Book("Samyak", "Jain");
console.log(addressBook.toString());