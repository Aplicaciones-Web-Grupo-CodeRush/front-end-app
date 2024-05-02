export class ReviewDetails {
    constructor(id = 0,
                lawyerName = '',
                time = Date(),
                rType = '',
                price=0.00,
                description = '') {
        this.id = id;
        this.lawyerName = lawyerName;
        this.time = time;
        this.rType = rType;
        this.price= price;
        this.description = description;
    }
}