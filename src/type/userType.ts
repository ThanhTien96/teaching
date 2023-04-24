
/** data login type **/
export interface ProfileType {
    id: number;
    email: string;
    avatar: string;
    phoneNumber: string;
    name: string;
    accessToken: string
};


/** logig type */

export interface LoginType {
    email: string;
    passWord: string;
}

/** sigUp */

export interface SignUpType {
    email: string;
    passWord: string;
    name: string;
    phoneNumber: string;
}
