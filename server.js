const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('[{"name":"John", "age":30, "city":"New York"},{"name":"John", "age":30, "city":"New York"}]');

   } );

app.listen(3000, () => console.log('Server running...'));
