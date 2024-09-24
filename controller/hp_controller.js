const ph = {
    home:(req, res)=>{
        res.render('home');  
    },
    favorites:(req, res) => {
        res.render('favorites');
    },
    playlist:(req, res) => {
        res.render('playlist');
    },
    about:(req, res) => {
        res.render('about');
    },
    artist:(req, res) => {
        res.render('artist');
    }
};

module.exports = ph;