import { AdminInterface } from "./IAdmin";

export interface MemberInterface {
    ID?: number;
    MemberUsername?: string;
    MemberEmail?: string;
    MemberPassword?: string;
    MemberStatus?: boolean;

    AdminID?: number;
    Admin?: AdminInterface;
}