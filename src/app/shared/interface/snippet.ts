import { Thumbnails } from "./thumbnails";

export interface Snippet {
    publishedAt: Date,
    channelId: string,
    title: string,
    description: string,
    thumbnails: Thumbnails,
    categoryId: number,
    channelTitle: string
}