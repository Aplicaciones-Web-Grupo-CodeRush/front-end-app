import http from "../../shared/services/http-common.js";

export class lawyerApiService {
    static getAll() {
        return http.get("/lawyers");
    }

    findByTitle(title) {
        return http.get(`/lawyers?title=${title}`);
    }

    getLawyerDetails(id) {
        return http.get(`/lawyers/${id}`);
    }
}
