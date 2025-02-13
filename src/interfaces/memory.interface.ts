export interface IMemoryCard {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    photos: Array<string>;
    funFact?: string;
}
