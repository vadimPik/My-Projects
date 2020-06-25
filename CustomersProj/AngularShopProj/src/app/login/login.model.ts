export interface User {
    userName: string;
    password: string;
}

export interface UserDetails {
    UserID: string;
    FirstName: string;
    LastName: string;
    Address: string;
    CreditCardNumber: string;
    CvvNumber: string;
    ExpiredInDate: Date;
    LastLoginDate: Date;
    ErrorMessage: string
}
