const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users'); //refering to users.js to load the user schema into mongoose


passport.serializeUser((user,done)=>{//user mongoose model instance pulled out from google flow just now and done function
done(null,user.id);//put some identifying information into the cookie
});

passport.deserializeUser((id, done)=> {//pull it back out and turn it back into a user

User.findById(id)
.then(user =>{
  done(null,user);
})
});
passport.use(
  new GoogleStrategy(
  {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy:true
},
async  (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({googleId: profile.id})//get through the user collection find the 1st user with that id

  if (existingUser){return done(null, existingUser);}

  const user = await new User({
    googleID:profile.id
  }).save();//if we don't have a user record with this id,
  done(null,user);
}

    // callback function and the profile.id below comes from google id
   //creating an instance based on users schema every time the user comes back from google oauth flow and save it to MONGOdb;

)
);
