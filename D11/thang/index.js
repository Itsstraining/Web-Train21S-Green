console.log (' hello word ')
const express = require('express');
const app = express();

app.get ("/home", (req,res) =>{
    let{a,b} = req.query;
     r=parseInt(a)+parseInt(b);
    res.send(
        "tong:"+ r
    )

})

app.listen(7070, () => {
    console.log("serve is running");
})