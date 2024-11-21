interface Book {
    place_id:number,
    user_id: number,
    username:string,
    service: string,
    price:number,
    statusFinished: number,
    queueNumber: number,
    dates: Array<string>
}

export default Book