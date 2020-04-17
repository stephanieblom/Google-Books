import React, {useState} from "react";

const axios = require('axios');


function SearchResult( props ){
    
    return (
        <>        
            <div class="container">
                <div class="row d-flex justify-content-center mt-2">
                {props.searchResults.map(item => ( <Item key={item.id} item={item} /> ))}
                </div>
            </div>
        </>
    )




    function Item({ item }) {

        const [display, setDisplay] = useState(true);
        const [book,setBook] = useState({title:"", image:"", link:"", description:"",authors:""});
    
        let title = "";
        let image = "";
        let link = "";
        let description = "";
        let authors = "";
    
    
    
        async function saveBook(){
            console.log('[Clicked on save book]',book);
            const newBook = { title, image, link, description, authors }
            console.log( 'new book', newBook );
            //sending to server
            const inputNewBook = await axios.post( 'http://localhost:5000/api/addBook', newBook );
            console.log( 'new book in db', inputNewBook)
            setDisplay( false )
        }

        title = item.volumeInfo.title;
        image = item.volumeInfo.imageLinks.thumbnail;
        link = item.volumeInfo.infoLink;
        description = item.volumeInfo.description;
        authors = item.volumeInfo.authors[0];

        return (
                    <div class="col-6">
                        <div class="card">
                            <div class="card-header">
                                <img class="rounded-circle" alt="70x70" src={item.volumeInfo.imageLinks.thumbnail} data-holder-rendered="true" />
                            </div>
                            
                            <div class="card-body">
                                <h5 class="card-title">{item.volumeInfo.title} </h5>
                                <a href={item.volumeInfo.infoLink}>More Info</a>
                                <h6>Author(s): {item.volumeInfo.authors[0]}</h6>
                                <p>Description: {item.volumeInfo.description}</p>
                                <br></br>
                                <a href="#" class="btn btn-primary" onClick={saveBook}>Save</a>
                            </div>
                        </div>
                    </div>
        );
      }

}

export default SearchResult;