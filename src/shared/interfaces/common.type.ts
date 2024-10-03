export interface User {
    _id?: string;
    name?: string;
    email: string;
    mobileNumber?: string;
    password: string;
    role?: string;
    profilePicture?: string;
    address?: string;
    lastLogin?: Date;
    dateOfBirth?: Date;
    isVerified?: boolean;
    isBlocked?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

export interface AuthContextType {
    isAuthenticated: boolean;
    // loading: boolean;
    login: (token: string, user: object) => void;
    logout: () => void;
}