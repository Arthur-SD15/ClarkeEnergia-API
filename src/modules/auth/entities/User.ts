export class User {
    id: string;
    name: string;
    surname: string;
    birthDate?: Date | null;
    email: string;
    password?: string;
    googleId?: string;
    createdAt: Date;
}
