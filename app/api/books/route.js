import books from './data.json';
import {NextResponse} from 'next/server';
// import {v4 as uuidv4} from 'uuid';
import { prisma } from '../../db';

export async function GET(req) {

    // await prisma.book.create({data:{
    //     title:'prisma book',
    //     link:"https://www.amazon.com/dp/BOBXMRB5VF/",
    //     img:"https://via.placeholder.com/600/92c952"
    // }})
    const books = await prisma.book.findMany();
    console.log('GET books called');
    return NextResponse.json(books);
}
export async function POST(req) {
    const {title, link, img} = await req.json();

    // const newBook ={
    //     id:uuidv4(),
    //     title, 
    //     link, 
    //     img};
    // books.push(newBook);
    await prisma.book.create({data:{
        title:title,
        link:link,
        img:img
    }})
    return NextResponse.json('Book added successfully');
    }




