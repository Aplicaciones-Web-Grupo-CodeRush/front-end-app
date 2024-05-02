import http from "../../shared/services/http-common.js";

export class reviewApiService {
    static getAll() {
        return http.get("/reviews");
    }
}