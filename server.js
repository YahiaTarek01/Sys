const {db, insert, getOne, getAll, deleteOne, update} = require("./modules/DataBase")
const { json } = require("stream/consumers")
const { request } = require("http")
const express = require("express")
const { name } = require("ejs")
const path = require("path")
const fs = require("fs")
const { send } = require("process")
const app = express()

app.set('views','./views')
app.set("view engine",'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'styles')))

app.get("/",(req,res) => {
    res.render("home.ejs")
})

app.post("/showdata",(req,res) => {
    insert(req.body.name,req.body.age)
    res.render("showdata.ejs",{
        data:getAll()
    })
})
app.listen(3001,() => {
    console.log("Hello New Project")
})