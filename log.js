const log=require("express");
const body=require("body-parser");
const http=require("https");
const app=log();
const { STATUS_CODES } = require("http");

app.use(body.urlencoded({extended:true}));
app.post("/",function(req,res){
 const b=req.body.user;
 const c=req.body.mail;
 const me={
  members:[
   {email_address:c,status:"unsubscribed",merge_fields:{
    NAME:b
   }}
  ]};
  const s=JSON.stringify(me);
 const u="https://us8.api.mailchimp.com/3.0/lists/464fbc158a";
 const op={ method:"post", auth:"As47:d3145024e46f8bd5e269a48ef10fecc5-us8"};
 const request=http.request(u,op,function(response){
  if(response.statusCode===200){
   res.write("<h1>Congrats!!You are Successfully Submitted</h1>");
   }
   else{
    res.write("<h1>Wrong Details</h1>");
  res.send();
}
res.on("data",function(data){
 console.log(JSON.stringify(data));
});

});
request.write(s);
request.end();
console.log(s);




 const p={
  name:"ANish",Roll:4615
};
console.log(JSON.stringify(p));
 res.on("data",function(data){
 
 console.log(JSON.parse(data));
  // res.send();
 });

});



app.listen(process.env.PORT || 14,function(){
 console.log("You are on port 14!!");

});
app.get("/",function(req,res){
 res.sendFile(__dirname+"/log.html");
});
