const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { read_file, write_file } = require("./fs/serverChange")
const { v4 } = require("uuid")
const { title } = require("process")

const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000


/////////////////////////ANIMALS///////////////////////////////////
//GET
app.get("/animals", (req, res) => {
    const animals = read_file("animals.json")
    res.status(200).send(animals)
})


///GET ONE
app.get("/get_one_animals/:id", (req, res) => {
    const { id } = req.params
    const animals = read_file("animals.json")
    const foundedAnimals = animals.find((item) => item.id === id)
    if (!foundedAnimals) {
        return res.status(404).json({ msg: "animals not found" })
    }
    res.status(200).json(foundedAnimals)
})

//POST
app.post("/creat_animal", (req, res) => {
    const { name, type, habitat } = req.body
    const animals = read_file("animals.json")
    animals.push({
        id: v4(),
        name,
        type,
        habitat
    })
    write_file("animals.json", animals)
    res.status(201).json({ msg: "added new animal" })
})

//PUT
app.put("/update_animal/:id", (req, res) => {
    const { id } = req.params
    const { name, type, habitat } = req.body
    const animals = read_file("animals.json")
    const foundedAnimals = animals.find((item) => item.id === id)
    if (!foundedAnimals) {
        return res.status(404).json({ msg: "animals not found" })
    }
    animals.forEach((item) => {
        if (item.id === id) {
            item.name = name ? name : item.name
            item.type = type ? type : item.type
            item.habitat = habitat ? habitat : item.habitat
        }
    })
    write_file("animals.json", animals)
    res.status(201).json({msg:"updated"})
})


//DELETE
app.delete("/deleted/:id", (req, res)=>{
    const { id } = req.params
    const animals = read_file("animals.json")
    const foundedAnimals = animals.find((item) => item.id === id)
    if (!foundedAnimals) {
        return res.status(404).json({ msg: "animals not found" })
    }
    animals.forEach((item, idx) => {
        if (item.id === id) {
            animals.splice(idx, 1)
        }
    })
    write_file("animals.json", animals)
    res.status(201).json({msg:"deleted"})
})


///////////////////////FRUITS//////////////////////////
//GET
app.get("/fruit", (req, res) => {
    const fruit = read_file("fruit.json")
    res.status(200).send(fruit)
})


///GET ONE
app.get("/get_one_fruit/:id", (req, res) => {
    const { id } = req.params
    const fruit = read_file("fruit.json")
    const foundedFruit = fruit.find((item) => item.id === id)
    if (!foundedFruit) {
        return res.status(404).json({ msg: "fruit not found" })
    }
    res.status(200).json(foundedFruit)
})

//POST
app.post("/creat_fruit", (req, res) => {
    const { name, color, taste, season } = req.body
    const fruit = read_file("fruit.json")
    fruit.push({
        id: v4(),
        name,
        color,
        taste,
        season
    })
    write_file("fruit.json", fruit)
    res.status(201).json({ msg: "added new fruit" })
})

//PUT
app.put("/update_fruit/:id", (req, res) => {
    const { id } = req.params
    const { name, color, taste, season } = req.body
    const fruit = read_file("fruit.json")
    const foundedFruit = fruit.find((item) => item.id === id)
    if (!foundedFruit) {
        return res.status(404).json({ msg: "fruit not found" })
    }
    fruit.forEach((item) => {
        if (item.id === id) {
            item.name = name ? name : item.name
            item.color = color ? color : item.color
            item.taste = taste ? taste : item.taste
            item.season = season ? season : item.season
        }
    })
    write_file("fruit.json", fruit)
    res.status(201).json({msg:"updated"})
})


//DELETE
app.delete("/delete_fruit/:id", (req, res)=>{
    const { id } = req.params
    const fruit = read_file("fruit.json")
    const foundedFruit = fruit.find((item) => item.id === id)
    if (!foundedFruit) {
        return res.status(404).json({ msg: "fruit not found" })
    }
    fruit.forEach((item, idx) => {
        if (item.id === id) {
            fruit.splice(idx, 1)
        }
    })
    write_file("fruit.json", fruit)
    res.status(201).json({msg:"deleted"})
})


app.listen(PORT, () => {
    console.log("server ishladi: " + PORT);
})

/////////////////DRINKS///////////////////////////
//GET
app.get("/drinks", (req, res) => {
    const drinks = read_file("drinks.json")
    res.status(200).send(drinks)
})


///GET ONE
app.get("/get_one_drinks/:id", (req, res) => {
    const { id } = req.params
    const drinks = read_file("drinks.json")
    const foundedDrinks = drinks.find((item) => item.id === id)
    if (!foundedDrinks) {
        return res.status(404).json({ msg: "drinks not found" })
    }
    res.status(200).json(foundedDrinks)
})

//POST
app.post("/creat_drink", (req, res) => {
    const { name, desc, price, imgUrl } = req.body
    const drinks = read_file("drinks.json")
    drinks.push({
        id: v4(),
        name,
        desc,
        price,
        imgUrl
    })
    write_file("drinks.json", drinks)
    res.status(201).json({ msg: "added new drink" })
})

//PUT
app.put("/update_drinks/:id", (req, res) => {
    const { id } = req.params
    const { name, desc, price, imgUrl } = req.body
    const drinks = read_file("drinks.json")
    const foundedDrinks = drinks.find((item) => item.id === id)
    if (!foundedDrinks) {
        return res.status(404).json({ msg: "drinks not found" })
    }
    drinks.forEach((item) => {
        if (item.id === id) {
            item.name = name ? name : item.name
            item.desc = desc ? desc : item.desc
            item.price = price ? price : item.price
            item.imgUrl = imgUrl ? imgUrl : item.imgUrl
        }
    })
    write_file("drinks.json", drinks)
    res.status(201).json({msg:"updated"})
})


//DELETE
app.delete("/delete/:id", (req, res)=>{
    const { id } = req.params
    const drinks = read_file("drinks.json")
    const foundedDrinks = drinks.find((item) => item.id === id)
    if (!foundedDrinks) {
        return res.status(404).json({ msg: "drinks not found" })
    }
    drinks.forEach((item, idx) => {
        if (item.id === id) {
            drinks.splice(idx, 1)
        }
    })
    write_file("drinks.json", drinks)
    res.status(201).json({msg:"deleted"})
})