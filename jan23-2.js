const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const port = 3000

app.use(morgan("dev"));
app.use(express.json());


const connectDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/jan23-2");
    console.log("Connected to the database");
};
connectDb();


const carSchema = new mongoose.Schema(
    {
        make: String,
        model: { type: String, unique: true},
        year:{ type: Number, unique: true},
    },
    {
        versionKey: false,
        timestamps: true, 
    }
);

const Car = mongoose.model("Car", carSchema);

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.post("/save-car", async (req, res) => {
    const { make, model, year } = req.body;
    try {
        const saveCar = new Car({ make, model, year });
        await saveCar.save();
        return res
        .status(201)
        .json({
            succes: true,
            message: "car saved successfully",
            data: saveCar,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({success: false, message: err.message});
    }
});


app.get("/get-car", async (req, res) => {
    try {
      const cars = await Car.find();
      return res.json({
          success: true,
          message: "Cars fetched successfully",
          data: cars,
          count: cars.length,
      });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false, message: err.message })
  }
  });

  app.put("/update/:id", async (req, res) => {
    const { make, model, year } = req.body;
    try {
        const updatedCar = await Car.findByIdAndUpdate(
            { _id: req.params.id },
            { make, model, year },
            { isNew: true }
        );

  app.get("/findCar", async (req, res) => {
    try {
        const car = await car.findOne({model: req.query.model});
        res.status(200).json({message: "Car found", data: Car})
    } catch (error) {
        
    }
  })
       
    
        return res.status(200).json({message: "CAR updated successfully", data: updatedCar});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message});
    }
  });

  



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});