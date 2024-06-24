export class Consultation {
    constructor(id = 0, date = '', legalIssue = '', description = '', doctorId = 0, doctorName = '', doctorSpecialty = '', lawyerId = 0, lawyerName = '', lawyerSpecialty = '') {
        this.id = id;
        this.date = date;
        this.legalIssue = legalIssue;
        this.description = description;
        this.doctor = {
            id: doctorId,
            name: doctorName,
            specialty: doctorSpecialty
        };
        this.lawyer = {
            id: lawyerId,
            name: lawyerName,
            specialty: lawyerSpecialty
        };
    }
}