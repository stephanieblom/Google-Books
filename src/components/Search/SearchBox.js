import React, {useState} from "react";
import style from '../../App.css'

function SearchBox(props){

  const [search, setSearch] = useState();

  function handleSearch(event){
    const input = event.target.value;
    console.log('Searching for:', input);
    setSearch( input );
  };

  function handleSubmit(event){
    event.preventDefault();
    console.log(`Submitted search:`, search);
    props.apiCall(search);
  };

  return (
    <form>
        <div class="row mb-0 d-flex justify-content-center form-group">
            <div class="col-6 d-flex justify-content-end pr-0 pl-0" style={style.SearchBoxLeft} >
                <label for="searchtxt">Search for a Book</label>
                <input id="searchtxt" onChange={handleSearch} value={search} type="text" class="form-control"></input>
            </div>
            <div class="col-2 d-flex justify-content-start pl-0" style={style.SearchBoxRight} >
    
                <button  onClick={handleSubmit} class="btn btn-primary submit">Search</button>

            </div>
        </div>
    </form>     
  )
}


export default SearchBox;