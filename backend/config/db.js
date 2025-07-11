import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://salonikhandelwal22553:s9PMew5qySLywDef@food.9mrus6b.mongodb.net/FoodDelivery')
    .then(()=>console.log("DB Connected"));

}