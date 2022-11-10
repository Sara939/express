const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');


app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true}));
app.use(cors());


app.post('/', (req, res)=>{
    const bodydata = req.body;
    res.send(bodydata);
});
app.get('/', (req,res) => {
    res.send("hey");
});
app.get('/sara', (req,res) => {
    res.send('heyyy sara')
});
app.get('/:id', (req,res) => {
    res.send(`id: ${req.params.id}` )
});




app.listen(port, ()=>{
    console.log("listening");
});
