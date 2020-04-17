const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

//MONGOOSE CONECTION AND STUFF
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/googleBooks', {useNewUrlParser: true, useUnifiedTopology: true,});
mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;
connection.once( 'open', () => {
    console.log('MongoDB connection established successfully')
})

const book = require( './db/models/books.js' );



// NODE ENDPOINTS
app.post( '/api/addBook', async ( req, res ) => {
    console.log( 'receving body: ', req.body );
    const bookData = req.body

    const dbBook = new book ( bookData );
    dbBook.save( (err, dbBook )=>{
        if( err ){ console.log(err)};
        console.log(dbBook);
    } );

    res.send( 'book data received! ')
});


app.post( '/api/dropBook', async ( req, res ) => {
    console.log( 'receving book id: ', req.body.id );
    const id = req.body.id

    const deleteBook = await book.deleteOne({"_id": `${id}`}, (err, data) => {
        if(err){
          return ('err');
        }
        console.log( `Data recieved from db: `, data)

        // data = JSON.parse(data)

        return (data);
      });

    res.send( 'book deleted ')
});


app.get( '/api/userBooks', async ( req, res ) => {
    console.log('received books request'  );

    const findBooks =  await book.find({}, (err, data) => {
        if(err){
          return ('err');
        }
        console.log( `Data recieved from db: `, data)

        // data = JSON.parse(data)

        return (data);
      });

      console.log(`Found books:`,findBooks)
    
    res.send(findBooks)
    
})

//LISTENING
app.listen( PORT, function(){
    console.log( `RUNNING, http://localhost:${PORT}` ); });