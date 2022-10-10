import express, { Router } from 'express'
import { categories } from '../data';


const router = express.Router();

router.get("/categories", (req, res) => res.send(categories));


router.get("/categories/:id", (req, res) => {
    const id = req.params.id
    const category = categories.find((item) => parseInt(id) === item.id)

    if (category) {
        return res.send(category)
    } else
    return res.status(404).send("Id doesn't exist")
})



router.post("/categories/category", (req, res) => {
    req.body = {
        id: 6,
        name: "Test3"
    }

    categories.push(req.body)

    return res.send(req.body)
})




export default router
