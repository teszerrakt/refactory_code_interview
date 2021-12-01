const express = require("express");
require("dotenv").config();
const { auth, requiresAuth } = require("express-openid-connect");
const mongoose = require("mongoose");
const User = require("./model/user");

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database not connected " + err);
  });

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

app.get("/", requiresAuth(), (req, res) => {
  const userData = req.oidc.user;

  User.find({ email: userData["email"] })
    .exec()
    .then((result) => {
      if (result.length >= 1) {
        res.send(
          req.oidc.isAuthenticated() &&
            `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center;font-family: Tahoma, sans">
                <div style="padding:4rem; background-color:#fcfcfc; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 2rem; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                    <img src=${userData["picture"]} style="border-radius:100%; padding: 1rem;"></img>
                    <h1>Hello ${userData["given_name"]}!</h1>
                    <a href="/logout" style="padding: 1rem 2rem; border: 1px solid;">Logout</a>
                </div>
            </div>`
        );
        console.log("User already exist");
      } else {
        const user_1 = new User({
          _id: mongoose.Types.ObjectId(),
          email: userData["email"],
          given_name: userData["given_name"],
          family_name: userData["family_name"],
          picture: userData["picture"],
        });

        user_1
          .save()
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
