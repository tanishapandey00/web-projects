const getHomepage = function (req, res) {
    res.render("index", { title: "Just Me" });
}
module.exports = {
    getHomepage
}