import http from "../../shared/services/http-common.js";

export class legalcaseApiService {
    static getAll() {
        return http.get("/legal-case");
    }
}