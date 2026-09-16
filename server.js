const express = require("express");

const app = express();
const PORT = 3000;

const foods = [
    {
        id: 1,
        name: "Pork Adobo",
        price: "₱75"
    },
    {
        id: 2,
        name: "Humba",
        price: "₱80"
    },
    {
        id: 3,
        name: "Pancit",
        price: "₱50"
    },
    {
        id: 4,
        name: "Chicken Fillet",
        price: "₱50"
    },
    {
        id: 5,
        name: "Lumpia",
        price: "₱20"
    },
    {
        id: 6,
        name: "Guisado",
        price: "₱60"
    },
    {
        id: 7,
        name: "Kare-Kare",
        price: "₱90"
    },
    {
        id: 8,
        name: "Kaldereta",
        price: "₱45"
    },
    {
        id: 9,
        name: "Hotdog with Marshmallow",
        price: "₱30"
    }
];

app.get("/api/foods", (req, res) => {
    res.json(foods);
});

app.get("/api/foods/:id", (req, res) => {

    const id = Number(req.params.id);

    const food = foods.find(food =>
        food.id === id
    );

    if (!food) {
        return res.status(404).json({
            message: "Food not found"
        });
    }

    res.json(food);
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});