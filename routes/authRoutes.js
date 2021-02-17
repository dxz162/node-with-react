const passport = require('passport');

module.exports = app => {
app.get('/auth/google',passport.authenticate('google',{scope: ['profile', 'email']})
);

app.get('/auth/google/callback',
passport.authenticate('google'),
(req,res) => {
   res.redirect('/surveys'); //webpage for logged in user
});
app.get('/api/logout',(req,res) => {//当log out的时候，reach back to landing page
  req.logout();
  res.redirect('/');
});
app.get('/api/current_user', (req,res) => {
  res.send(req.user);// test someone go through the oauth flow could get access to the user
});
};
