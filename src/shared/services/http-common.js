import axios from "axios";

const API_BASE_URL='https://my-json-server.typicode.com/Aplicaciones-Web-Grupo-CodeRush/Consultation/';

const http= axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-type': 'application/json'}
});

export default http;
