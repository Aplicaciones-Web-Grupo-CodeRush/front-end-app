export class ReviewDetails {
    constructor(id = 0,
                lawyerId = 0,
                time = Date(),
                rType = '',
                price=0.00,
                description = '') {
        this.id = id;
        this.lawyerId = lawyerId;
        this.time = time;
        this.rType = rType;
        this.price= price;
        this.description = description;
    }
}