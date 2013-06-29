module.exports = function(req, res){
    res.render('user', {
        title: 'My Profile',
        header: 'User Profile',
        user: {
            username: 'SumUsrName',
            firstname: 'Joe',
            lastname: 'Blow',
            email: 'JoeBlow@example.com',
            location: 'United States'
        }
    });
};