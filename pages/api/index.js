import axios from "axios";

const url = "http://localhost:1337/api/strapi-forums";
export const readForum = () => axios.get(url);
