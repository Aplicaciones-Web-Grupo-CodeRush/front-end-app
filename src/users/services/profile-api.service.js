import axios from 'axios';
import {Users} from '../model/profile.entity.js';

export class UsersApiService {
    constructor() {
        this.BASE_URL = 'https://my-json-server.typicode.com/Aplicaciones-Web-Grupo-CodeRush/Consultation/users';
    }

    async getUsers() {
        try {
            const response = await axios.get(`${this.BASE_URL}`);
            return response.data.map(user => new Users(
                user.id,
                user.name,
                user.email,
                user.DNI,
                user.queriesMade,
                user.paidServices,
                user.paidSubscriptions,
                user.urlToImage,
                user.state
            ));
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}