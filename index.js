const express = require('express');
const path = require("path");
const app = express();
app.use(express.urlencoded({extended:false}));
//expressがどこの階層で処理させたいか指定
app.use(express.static(path.join(__dirname,"public")));
// app.get('/', function (req, res) {
//   res.send('<h1>トップページ!</h1>')
// })

app.post("/app/v1/quiz",function(req,res){
    const answer = req.body.answer;
    res.send(answer);
})

app.get('/about', function (req, res) {
    res.send('アバウトページ')
  })
app.listen(3000,function(){
    console.log("I am running!");
})

console.log("最終行");