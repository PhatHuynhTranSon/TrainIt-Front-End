class Authentication {
    login(access_token) {
        localStorage.setItem("access_token", access_token)
    }

    logout() {
        localStorage.removeItem("access_token");
    }

    isLoggedIn() {
        const token = localStorage.getItem("access_token");
        console.log(token);
        return token;
    }
}

const auth = new Authentication();

export default auth;