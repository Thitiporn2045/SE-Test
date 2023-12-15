import { GendersInterface } from "../../../interface/IGender";

const apiUrl = "http://localhost:8080";

async function GetGenders() {
    const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
    };

    let res = await fetch(`${apiUrl}/genders`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
        if (res.data) {
        return res.data;
        } else {
        return false;
        }
    });

    return res;
}



export {
    GetGenders,
};