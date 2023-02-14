import {IBookBooking, IBookDelivery, IBookImage} from "./IBook";

export interface IBookDetail {
    id: number;
    title: string;
    rating: number;
    issueYear: number;
    description: string;
    publish: string;
    pages: string;
    cover: string;
    weight: string;
    format: string;
    ISBN: string;
    producer: string;
    authors: string[];
    images: IBookImage[];
    categories: string[];
    comments: IBookComment[];
    booking: IBookBooking;
    delivery: IBookDelivery;
    histories: IBookHistory;
}

export interface IBookComment {
    id: number;
    rating: number;
    text: string;
    createdAt: Date;
    user: ICommentUser;
}
interface ICommentUser {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: string;
}
interface IBookHistory {
    id: number;
    userId: number;
}
