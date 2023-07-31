const mongoose = require ("mongoose")
require("dotenv").config()
mongoose.connect(process.env.DATABASE_URL)

const Cat = require("./models/cat")

async function seed(){
    await Cat.create(
        {
            name: "Felix",
            colour: "grey and white",
            hasClaws: true,
            likes: ["sleeping", "sipping milk", "climbing trees"]
        }
    );
    await Cat.create(
        {
            name: "Cedric",
            colour: "ginger",
            hasClaws: false,
            likes: ["fighting", "running", "eating"]
        }
    )

    console.log("Go Cat!");
    mongoose.disconnect()
}

seed();
