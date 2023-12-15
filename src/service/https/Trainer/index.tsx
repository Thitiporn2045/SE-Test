import { TrainerInterface } from "../../../interface/ITrainer";

const apiUrl = "http://localhost:8080";

async function GetAllTrainer() {
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



async function GetTrainerById(id: Number | undefined) {
const requestOptions = {
    method: "GET",
};

let res = await fetch(`${apiUrl}/trainers/byId/${id}`, requestOptions)
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

async function CreateTrainer(data: TrainerInterface) {
const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
};

let res = await fetch(`${apiUrl}/trainers`, requestOptions)
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

async function UpdateTrainer(data: TrainerInterface) {
const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
};

let res = await fetch(`${apiUrl}/trainers`, requestOptions)
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

async function DeleteTrainerByID(id: Number | undefined) {
const requestOptions = {
    method: "DELETE",
};

let res = await fetch(`${apiUrl}/trainers/${id}`, requestOptions)
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


async function GetTrainerByEmail(trainer_email: String | undefined) {
    const requestOptions = {
        method: "GET"
        };
    
        let res = await fetch(`${apiUrl}/trainersemail/${trainer_email}`, requestOptions)
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
    GetAllTrainer,
    GetTrainerById,
    CreateTrainer,
    DeleteTrainerByID,
    UpdateTrainer,
    GetTrainerByEmail,
};