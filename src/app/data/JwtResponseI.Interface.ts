import { ErrorResponseI } from "./ErrorResponseI.Interface";

export interface JwtResponseI extends ErrorResponseI {
        token:string,
        expireAt:string
}