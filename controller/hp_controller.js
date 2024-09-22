const ph = {
    home:(req, res)=>{
        res.render('home');  
    },
    favorites:(req, res) => {
        res.render('favorites');
    },
    watchlist:(req, res) => {
        res.render('watchlist');
    },
    trending:(req, res) => {
        res.render('trending');
    },
    recent:(req, res) => {
        res.render('recent');
    }
};

module.exports = ph;