const express = require("express");

const app = express();

const Validation = {
    body: ({
      ID: number()
        .required(),
      Name: string()
        .required(),
        Rating: number()
        .required(),
        Description: string()
        .required(),
        Genre: string()
        .required(),
        Cast: string()
        .required(),
    }),
  }
  
  app.use(bodyParser.json())
  
  app.post('/movies', validate(Validation, {}, {}), (req, res) => {
    res.json(200)
  })
  
  app.use((err, req, res, next) => {
    if (err) 
    {
      return res.status(400).json(err)
    }
  
    return res.status(500).json(err)
  })

app.listen(8000,() => {
    console.log("listening to port 8000");
})