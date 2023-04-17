import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
// import { sampleFood, sampleTags, sampleUsers } from "./data";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";

const app = express();
const port = 5000;

app.use(express.json());

// localhost:4200 - Angular app Frontend
// localhost:5000 - NodeJS Backend
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:4200",
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Getting Request works! ");
});

/*******************
 *
 * Old code
 */
// get all foods
// app.get("/api/foods", (req, res) => {
//   res.send(sampleFood);
// });

// get food by search
// app.get("/api/foods/search/:searchFood", (req, res) => {
//   const searchFood = req.params.searchFood;

//   const filteredFoods = sampleFood.filter((food) => {
//     return food.name.toLowerCase().includes(searchFood.toLowerCase());
//   });

//   res.send(filteredFoods);
// });

// get all tags
// app.get("/api/foods/tags", (req, res) => {
//   res.send(sampleTags);
// });

// get food by tag
// app.get("/api/foods/tags/:tag", (req, res) => {
//   const tag = req.params.tag;

//   const filteredFoods = sampleFood.filter((food) => {
//     return food.tags.includes(tag);
//   });

//   res.send(filteredFoods);
// });

// get food by id
// app.get("/api/foods/:id", (req, res) => {
//   const id = req.params.id;

//   const food = sampleFood.find((food) => {
//     return food.id === id;
//   });

//   res.send(food);
// });

// user login
// app.post("/api/users/login", (req, res) => {
//   /*
//    * normal way to get data from request body
//    *
//    * const body = req.body.email;
//    *
//    * const user = sampleUsers.find((user) => {
//    *  user.email === body.email && user.password === body.password;
//    * });
//    */

//   // destructure assignment
//   const { email, password } = req.body;

//   const user = sampleUsers.find((user) => {
//     return user.email === email && user.password === password;
//   });

//   if (user) {
//     res.send(generateToken(user));
//   }
//   res.status(400).send("Invalid email or password");
// });

// generate token for login
// const generateToken = (user: any) => {
//   /*
//    * here we are using jwt to generate token
//    * to hide user email and admin status
//    */
//   const token = jwt.sign(
//     {
//       email: user.email,
//       isAdmin: user.isAdmin,
//     },
//     "|<@j@M0]-[@N1998",
//     { expiresIn: "1d" }
//   );

//   user.token = token;
//   return user;
// };

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
