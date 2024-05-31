'use client';
import { useState } from "react";

const AddBook = () =>{
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div>
            <button className="btn" onClick={()=>setModalOpen(true)}>AddBook</button>
            <dialog id="my_modal_3" className={`modal ${modalOpen ?"modal-open":""}`}>
                <form method="dialog" className="modal-box">
                    <button onClick={()=>setModalOpen(false)}
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        X 
                    </button>
                    <h3 className="font-bold text-lg">
                        Add New Book
                    </h3>

                </form>
            </dialog>
        </div>
    )
}
export default AddBook;