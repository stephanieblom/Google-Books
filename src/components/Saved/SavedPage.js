import React,{useState, useRef, useEffect, useContext} from "react";
import SavedBookCard from "./SavedBookCard"

const axios = require('axios');

function SavedPage( props ){


    const [ books, setBooks ]= useState([]);
    
    // load only ONCE at component load
    useEffect( function(){
        loadBooks();
    }, [] );


    async function loadBooks(){
        console.log(`calling axios.get for books`)
        const apiBooks = await axios.get( `http://localhost:5000/api/userBooks`);

        
        if( apiBooks.error ){
            console.log(`error getting from db`, apiBooks.error)
            return;
        }
        
        console.log( `received books from db: `, apiBooks.data)
        setBooks( apiBooks.data );
        console.log( `Set books to data: `, books)
    }

    return (
        <div class="row">
          {books.map( book=><SavedBookCard {...book} />)}
        </div>
    )
  }

export default SavedPage;