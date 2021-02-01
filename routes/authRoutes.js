const passport = require('passport');

module.exports = app => {
app.get('/auth/google',passport.authenticate('google',{scope: ['profile', 'email']})
);

app.get('/auth/google/callback', passport.authenticate('google')); //not kicking the user to oauth flow
app.get('/api/logout',(req,res)=>{
  req.logout();
  res.send(req.user);
});
app.get('/api/current_user', (req,res)=>{
  res.send(req.user);// test someone go through the oauth flow could get access to the user
});
}
;
