
export class Users {
    constructor(id = '', name = '', email = '', DNI = '', queriesMade = '', paidServices = '', paidSubscriptions = '',  urlToImage = '', state = '') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.DNI = DNI;
        this.queriesMade = queriesMade;
        this.paidServices = paidServices;
        this.paidSubscriptions = paidSubscriptions;
        this.urlToImage = urlToImage;
        this.state = state;
    }
}