export interface IAddress {
    street:string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: number;
    name: string;
    email?: string;
    address?: IAddress;
    avatarUrl: string;
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IBookCard {
    id: number;
    title: string;
    author: string;
    year: number;
    grade?: number;
    hasGrade: boolean;
    imageUrls: string[];
    ordered?: string;
}

export interface IBookCardDetail {
    publishingHouse: string;
    publishingYear: number;
    letterCount: number;
    binding: string;
    format: string;
    genre: string;
    weight: string;
    ISBN: string;
    producer: string
}

export interface IBookCardReview {
    grade: number;
    name: string;
    secondName: string;
    text?: string;
    date: string;
}

export interface IBookCardAddition {
    description: string;
    details: IBookCardDetail;
    reviews: IBookCardReview[];
}

export interface IBookCardFull extends IBookCard, IBookCardAddition {}
