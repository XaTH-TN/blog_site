
// const NewController = () => {

//     // [GET] /news
//     const index = (req, res) => {
//         res.render('news');
//     }
// }

// export default NewController;

class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    };

    show(req, res) {
        res.send('NEWS DETAIL!');
    };
}

module.exports = new NewsController;