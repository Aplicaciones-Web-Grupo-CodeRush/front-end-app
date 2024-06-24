import http from "../../shared/services/http-common.js";

export class ResourceService {
    static getAll() {
        return http.get("/educational-resource");
    }
}