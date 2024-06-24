import http from "../../shared/services/http-common.js";

export class consultationApiService {
    static getAll() {
        return http.get("/consultation");
    }
}