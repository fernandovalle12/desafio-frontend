import { ContentDetails } from "./content_details";
import { Snippet } from "./snippet";
import { Statistics } from "./statistics";
import { Status } from "./status";

export interface Video {
    id: string,
    kind: string,
    etag: string,
    snippet: Snippet,
    contentDetails: ContentDetails,
    status: Status,
    statistics: Statistics
}