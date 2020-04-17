import React, { useState, useEffect, useContext } from "react";
import SettingsContext from './SettingsContext';

// SearchPage ->
function BreedResultList( props ){
    // give us access to the context-object 'settings'
    const settings = useContext(SettingsContext);
    const [thumbWidth, thumbHeight] = settings.searchThumbsize.split('x');

    const [ dogImages, setDogImages ] = useState( [] );
    console.log( `[BreedResultList] updating breed pictures: ${props.showBreed}` );
    
    useEffect( function(){
        console.log( `[BreedResultList] USE-EFFECT called!`)
        // fetch from the API
        loadBreedImages( props.showBreed );
    }, [ props.showBreed ] );
    
    async function loadBreedImages( breed ){
        if( breed.length>2 ){
            console.log( ` ... calling api to get breed images` );
            const apiResult = await fetch( `https://dog.ceo/api/breed/${breed}/images` )
                                    .then( result=>result.json() );
            setDogImages( apiResult.message );
        } else {
            console.log( ` x [loadBreedImages] called, but no breed value (${breed}) ` );
        }
    }
    
    return (
        <div class="container">
            <div class="row">
                { dogImages.map( dogImage=>
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <img class="card-img-top" src={dogImage} style={{ width:`${thumbWidth}px`, height: `${thumbHeight}px` }} alt="" />
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>                
                    )}                                      
            </div>
        </div>        
    )
}

export default BreedResultList;