export class ReviewDetails {
    constructor(id = 0,
                caseNumber = '',
                description = Date(),
                status = '') {
        this.id = id;
        this.caseNumber = caseNumber;
        this.description = description;
        this.status = status;
    }
}