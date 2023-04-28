import axios from "axios";

export const api = axios.create({
  baseURL:  "https://magenta-zuccutto-c6504f.netlify.app/"
});

/* test localy: "http://localhost:3333" */
