export interface Places {
    id:number,
    name: string,
    location: string,
    rating: number,
    features: Array<string>,
    img_source: string,
    pricing: number,
    queue: number,
    capacity: number,
    range: number,
}