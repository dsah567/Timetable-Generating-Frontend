import axios from "axios";
export async function isLoginLoader(){
    try {
        let isLoggedIn;
        await axios.post("/api/v1/users/islogedin")
            .then((res) => isLoggedIn = res.status)
            .catch((err) => {
                console.log("isLoginLoader error")
            })
        if (isLoggedIn === 200) {
            return null
        }
        window.location.href="/"
    } catch (error) {
        console.log("uti error",error);
    }
}