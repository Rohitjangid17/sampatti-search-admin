export interface User {
    _id?: string;
    name: string;
    email: string;
    mobileNumber: string;
    password: string;
    role?: string;
    profilePicture: string;
    address?: string;
    lastLogin?: Date;
    dateOfBirth?: Date;
    isVerified: boolean;
    isBlocked: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}