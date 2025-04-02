'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function (req, res) {
    let radius = parseFloat(req.params['r']);
    if (isNaN(radius)) 
      return res.status(400).json({error: 'Radius must be a number'});
  
    res.type("json")
    res.send({ 
        area: Math.PI * radius * radius, 
        circumference: Math.PI * 2 * radius 
    });
  });
  
// define endpoint for exercise 2 here
app.get('/hello/:fname/:lname', function(req, res){
    const first = req.params['fname']
    const last = req.params['lname']

    if (!first && !last)
        return res.status(400).send("Missing Required GET parameters: first, last");
    else if (!first)
        return res.status(400).send("Missing Required GET parameter: first");
    else if (!last)
        return res.status(400).send("Missing Required GET parameter: last");

    res.send(`Hello ${first} ${last}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
