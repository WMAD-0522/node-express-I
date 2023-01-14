import express from "express";

const router = express.Router();

router.get('/categories', function(req, res){
    let arr = [
        {
            strCategory: "Ordinary Drink"
        },
        {
            strCategory: "Cocktail"
        },
        {
            strCategory: "Shake"
        },
        {
            strCategory: "Other / Unknown"
        }
    ];

    res.status(200);
    res.json({
        categories: arr,
        message: "Categories fetched successfully"
    })
})

router.get("/", function(req, res){
    res.send("Hello World");
})

router.post("/add-coctail", function(req, res){
    console.log(req.body);
    res.status(201);
    res.json({
        message: "Coctail added successfully"
    })
})

export default router;