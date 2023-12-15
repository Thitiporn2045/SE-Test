import { AdminInterface } from "../../../interface/IAdmin";

const apiUrl = "http://localhost:8080";

async function GetAllAdmin() {
const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
};

let res = await fetch(`${apiUrl}/admins`, requestOptions)
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



async function GetAdminById(id: Number | undefined) {
const requestOptions = {
    method: "GET",
};

let res = await fetch(`${apiUrl}/admins/byId/${id}`, requestOptions)
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

async function CreateAdmin(data: AdminInterface) {
const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
};

let res = await fetch(`${apiUrl}/admins`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
        return { status: true, message: res.data };
    } else {
        return { status: false, message: res.error };
    }
    });

return res;
}

async function UpdateAdmin(data: AdminInterface) {
const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
};

let res = await fetch(`${apiUrl}/admins`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
        return { status: true, message: res.data };
    } else {
        return { status: false, message: res.error };
    }
    });

return res;
}

async function DeleteAdminByID(id: Number | undefined) {
const requestOptions = {
    method: "DELETE",
};

let res = await fetch(`${apiUrl}/admins/${id}`, requestOptions)
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

async function GetAdminByEmail(admin_email: String | undefined) {
    const requestOptions = {
        method: "GET"
        };
    
        let res = await fetch(`${apiUrl}/adminsemail/${admin_email}`, requestOptions)
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
    GetAllAdmin,
    GetAdminById,
    CreateAdmin,
    DeleteAdminByID,
    UpdateAdmin,
    GetAdminByEmail,
};