import { MemberInterface } from "../../../interface/IMember";

const apiUrl = "http://localhost:8080";

async function GetAllMember() {
const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
};

let res = await fetch(`${apiUrl}/members`, requestOptions)
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



async function GetMemberById(id: Number | undefined) {
const requestOptions = {
    method: "GET",
};

let res = await fetch(`${apiUrl}/members/byId/${id}`, requestOptions)
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

async function CreateMember(data: MemberInterface) {
const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
};

let res = await fetch(`${apiUrl}/members`, requestOptions)
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

async function UpdateMember(data: MemberInterface) {
const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
};

let res = await fetch(`${apiUrl}/members`, requestOptions)
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

async function UpdateStatus(id: Number | undefined) {
const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id })
};

try {
    let response = await fetch(`${apiUrl}/members/${id}`, requestOptions);
    let res = await response.json();

    if (response.ok) {
        return { status: true, message: res.data };
    } else {
        return { status: false, message: res.error };
    }
} catch (error) {
    return { status: false, message: "เกิดข้อผิดพลาดในการสื่อสารกับเซิร์ฟเวอร์" };
}
}


async function DeleteMemberByID(id: Number | undefined) {
const requestOptions = {
    method: "DELETE",
};

let res = await fetch(`${apiUrl}/members/${id}`, requestOptions)
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


async function GetMemberByEmail(member_email: String | undefined) {
    const requestOptions = {
        method: "GET"
        };
    
        let res = await fetch(`${apiUrl}/membersemail/${member_email}`, requestOptions)
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
    GetAllMember,
    GetMemberById,
    CreateMember,
    DeleteMemberByID,
    UpdateMember,
    UpdateStatus,
    GetMemberByEmail,
};