import axios from "axios";

class LoginService {
  static login(body) {
    console.log("body--->", body);

    return axios.post("/login", body);
  }
}

export default LoginService;
