var data = require("../data/friends.js")
module.export=function(app) {
    app.get("api/friends", function (req, res){
        res.json(data);
    })
}
app.post("api/friends", function (req, res){
    var user = req.body
    var nf = {
        name: " ",
        photo: " ",
        scores [i]:
    }

    for(var i = 0; i < data.length; i++){
        var current = Friends[i];  
        var totalDifference = 0
        console.log(current.name)
        for(var j = 0)
    }
    res.json(data);
})
// nested for loop  