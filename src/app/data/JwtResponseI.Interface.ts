import { ErrorResponseI } from "./ErrorResponseI.Interface";

export interface JwtResponseI extends ErrorResponseI {
        jwtToken:string,
        expireAt:string
        id:number,
        username:string
}