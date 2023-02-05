const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended:true }));

app.post('/usuarios', (request, response) => {
    console.log(request.body);
    response.send('<h1>Parabéns ! informações recebidas com sucesso.</h1>')
});

app.post("/usuarios/:id", (request, response) => {
    console.log(request.params.id);
    console.log(request.body);
    response.send("<h1>Usuário alterado com sucesso.<h1/>");
})
app.get("/usuarios/:id", (request, response) => {
    console.log(request.params.id);
    console.log(request.query);
    response.send("<h1>Usuário alterado com sucesso.<h1/>");
})

console.log("FormServer listen on port 3003")
app.listen(3003);