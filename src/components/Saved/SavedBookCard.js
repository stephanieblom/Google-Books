import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";

const axios = require('axios');


function SavedBookCard( props ){

    const selectId = useRef();

    async function deleteBook(){
        console.log('[Clicked on delete book with id]',selectId.current.id);
        let id = selectId.current.id
        const book = {id}
        //sending to server
        const deleteBook = await axios.post( 'http://localhost:5000/api/dropBook', book);
        console.log( 'deleted book', deleteBook)
    }

    return (
        <div class="col-6">
            <div class="card">
                <div class="card-header">
                    <img class="rounded-circle" alt="70x70" src={props.image} data-holder-rendered="true" />
                </div>
                
                <div class="card-body">
                    <h5 class="card-title">{props.title} </h5>
                    <a href={props.link}>More Info</a>
                    <h6>Author(s): {props.authors[0]}</h6>
                    <p>Description: {props.description}</p>
                    <br></br>
                    <a href="#" class="btn btn-primary" onClick={deleteBook} ref={selectId} id={props._id}>Delete</a>
                </div>
            </div>
        </div>
    )
}

export default SavedBookCard;