export interface IBook {
    id: number;
    rating: number | null;
    title: string;
    authors: string[];
    image: IBookImage;
    categories: string[];
    booking: IBookBooking;
    delivery: IBookDelivery;
    histories: IBookHistory;
    issueYear: number;
}

export interface IBookImage {
    url: string;
}

export interface IBookBooking {
    id: number;
    order: boolean;
    dateOrder: Date;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
}

export interface IBookDelivery {
    id: number;
    handed: boolean;
    dateHandedFrom: Date;
    dateHandedTo: Date;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
}

interface IBookHistory {
    id: number;
    userId: number;
}
