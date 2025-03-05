import { getUser, UserLogin, UserSignUp } from "../controller/UserController.js";
import { Authmiddle } from "../middlware/Auth.js";

function routes(app) {
    app.post("/signup" , UserSignUp );
    app.post("/login" , UserLogin );
    app.get("/getuser/:id" , Authmiddle , getUser );
}

export default routes;


