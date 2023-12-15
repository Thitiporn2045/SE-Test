import { AdminInterface } from "./IAdmin";

export interface TrainerInterface {
    ID?: number;
    TrainerUsername?: string;
    TrainerEmail?: string;
    TrainerPassword?: string;

    AdminID?: number;
    Admin?: AdminInterface;
}