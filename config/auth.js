module.exports = {
    ensureAuthenticated: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        else{
            // if not logged in redirect to login
        res.redirect('/admin/login');
        }
    }
}