import axios from "axios";
export async function isLoginLoader(){
    try {
        let isLoggedIn,Data;
        await axios.post("/api/v1/users/islogedin")
            .then((res) => {
                        isLoggedIn = res.status
                        Data = res.data.data
                        console.log(res.data.data)    })
            .catch((err) => {
                console.log("isLoginLoader error")
            })
        if (isLoggedIn === 200) {
            return Data;
        }
        window.location.href="/"
    } catch (error) {
        console.log("uti error",error);
    }
}