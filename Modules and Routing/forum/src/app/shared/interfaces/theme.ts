import { IUser } from "./user";

export interface ITheme {
    "subscribers": string[],
    "posts": string[],
    "themeName": string,
    "userId": IUser,
    "created_at": string,
    "updatedAt": string
    "__v": number
}