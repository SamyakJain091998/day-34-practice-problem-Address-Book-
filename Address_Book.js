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
        let firstNameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
        if (firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        }
        else throw 'firstName is incorrect';
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
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
            + ", eMail => " + this.eMail + "\n";
    }
}

let addressBookObj;
let addressBookArray = new Array();

try {
    
    console.log("-------------ADDING CONTACTS--------------");
    addressBookObj = new Address_Book("Samyak", "Jain", "Dusshehra @Maidan", "Ujjain",
        "Madhya Pradesh", 560100, 7580813216, "abc@gmail.com");
    addressBookArray.push(addressBookObj);

    addressBookObj = new Address_Book("Manu", "Jain", "Dusshehra @Maidan", "Ujjain",
        "Madhya Pradesh", 560100, 7580813216, "abc@gmail.com");
    addressBookArray.push(addressBookObj);

    addressBookArray.forEach(dummyObj => console.log("=====>" + dummyObj + "\n"));
    console.log("-------------UPDATING AN ELEMENT--------------");
    changeFirstName("Samyak", "Sammy");
    addressBookArray.forEach(dummyObj => console.log("=====>" + dummyObj + "\n"));

    // console.log("-------------DELETING AN ELEMENT--------------");
    // deleteObjectUsingFirstName("Sammy");
    // addressBookArray.forEach(dummyObj => console.log("---->" + dummyObj + "\n"));

    console.log("-------------COUNTING THE NUMBER OF CONTACTS--------------");
    let numberOfContacts = addressBookArray.reduce((count, addressBookObject) => count+=1, 0);
    console.log(numberOfContacts);

    console.log("-------------CHECKING FOR DUPLICATE CONTACTS--------------");
    addressBookObj = new Address_Book("DummyFirstName", "DummyLastName", "Maidan", "Ujjn",
        "Madhya Pradesh", 456010, 6263651607, "jainsamyak941998@gmail.com");

    if (contactExistStatus(addressBookObj)) {
        console.log("Contact already exist in the address Book. Please enter a valid entry!!!");
        return;
    } else {
        addressBookArray.push(addressBookObj);
    }
    console.log("UPDATED CONTACT LIST---->");
    addressBookArray.forEach(dummyObj => console.log(dummyObj + "\n"));
    
    console.log("-------------COUNTING THE NUMBER OF CONTACTS--------------");
    numberOfContacts = addressBookArray.reduce((count, addressBookObject) => count+=1, 0);
    console.log(numberOfContacts);
    
    searchAddressBookByCity("Ujjain");
    searchAddressBookByState("Madhya Pradesh");
    console.log("\n");
    console.log("-------------DISPLAYING BY THE CITY--------------");
    let grouped = groupBy(addressBookArray, addressBookObject => addressBookObject.city);
    console.log(grouped.get("Ujjain"));
    console.log("-------------DISPLAYING BY THE STATE--------------");
    grouped = groupBy(addressBookArray, addressBookObject => addressBookObject.state);
    console.log(grouped.get("Madhya Pradesh"));
    console.log("\n");
    console.log("-------------DISPLAYING COUNT BY CITY--------------");
    countContactsByCity("Ujjain");
    console.log("-------------DISPLAYING COUNT BY STATE--------------");
    countContactsByState("Madhya Pradesh");
    
} catch (e) {
    console.error(e);
}

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

function countContactsByCity(cityName) {
    console.log("++++++++++++++++++++++++++ Count of Contacts in " + cityName + " ++++++++++++++++++++++++++");
    console.log(addressBookArray.filter(dummyObj => dummyObj.city == cityName)
        .reduce((count, addressBookObject) => count += 1, 0));
}

function countContactsByState(stateName) {
    console.log("++++++++++++++++++++++++++ Count of Contacts in " + stateName + " ++++++++++++++++++++++++++");
    console.log(addressBookArray.filter(dummyObj => dummyObj.state == stateName)
        .reduce((count, addressBookObject) => count += 1, 0));
}

function searchAddressBookByCity(cityName) {
    console.log("++++++++++++++++++++++++++ Contacts in " + cityName + " ++++++++++++++++++++++++++");
    console.log(addressBookArray.filter(dummyObj => dummyObj.city == cityName).toString());
}

function searchAddressBookByState(stateName) {
    console.log("++++++++++++++++++++++++++ Contacts in " + stateName + " ++++++++++++++++++++++++++");
    console.log(addressBookArray.filter(dummyObj => dummyObj.state == stateName).toString());
}

function contactExistStatus(localAddressBookObject) {
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName == localAddressBookObject.firstName
            && addressBookArray[i].lastName == localAddressBookObject.lastName) {
            return true;
        }
    }
    return false;
}


function deleteObjectUsingFirstName(firstName) {
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName == firstName) {
            addressBookArray.splice(i, 1);
        }
    }
}


function changeFirstName(firstName, updatedFirstName) {
    for (var i in addressBookArray) {
      if (addressBookArray[i]._firstName == firstName) {
         addressBookArray[i]._firstName = updatedFirstName;
         break; //Stop this loop, we found it!
      }
    }
 }

