import { NextResponse } from "next/server";
// import books from "../data.json";
import { prisma } from '../../../db';


export async function GET(req) {
    const {searchParams} = new URL(req.url);
   const query = searchParams.get('query');

    // const filteredBooks = books.filter((book) =>{
    //     return book.title.toLowerCase().includes(
    //         query.toLowerCase());
    // });
    const filteredBooks = await prisma.book.findMany({
        where:{
            title:{
                contains:query
            }
        }
    })

    return NextResponse.json(filteredBooks);
}

