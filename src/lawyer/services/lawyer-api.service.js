import http from "../../shared/services/http-common.js";

export class lawyerApiService {
    getAll() {
        return http.get("/consultation/lawyers");
    }

    get(id) {
        return http.get(`/lawyers/${id}`);
    }

    create(data) {
        return http.post("/lawyers", data);
    }

    update(id, data) {
        return http.put(`/lawyers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/lawyers/${id}`);
    }

    deleteAll() {
        return http.delete(`/lawyers`);
    }

    findByTitle(title) {
        return http.get(`/lawyers?title=${title}`);
    }
}
