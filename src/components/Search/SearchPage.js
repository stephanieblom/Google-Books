import React, {useState} from "react";
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

function SearchPage( props ){
    const [result, setResult] = useState([]);

    const style = {
        SearchBox: { 
          border: "0px solid Black" },
        SearchResult: { 
          border: "0px solid Yellow"
        }
      }


    
    async function searchFunction(search){
      const apiKey = "AIzaSyB7KjUi615NC83ebrREPc_9tbcEA_MYwLE";
      const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&key=${apiKey}`;
      const apiResult = await fetch( apiURL ).then( result => result.json());
      console.log('api recieved data:', apiResult );
      setResult( [ ...apiResult.items ] );
    }

    return (
        <>
            {console.log("Search Page Rendering....")}
            <div class="d-flex flex-column h-100">
                    <div class="row">
                        <div class="col" style={style.SearchBox} > <SearchBox apiCall={searchFunction} /> </div>
                    </div>
                    <div class="row flex-grow-1">
                        <div class="col" style={style.SearchResult} > <SearchResult searchResults={result} /> </div>
                    </div>
            </div>
        </>
    )
}

export default SearchPage;