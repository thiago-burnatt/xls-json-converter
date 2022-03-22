const res = require("express/lib/response");
const node_xj = require("xls-to-json");

exports.homePage = (req, res) => {
    res.render('index');
    return;
}

exports.fileConversion = (req, res) => {
    const filename = req.file.filename;

    if (!filename) {
        req.flash('errors', 'Ocorreu um erro');
    }

    const onlyFilename = filename.split('-');
    const removeExt = onlyFilename[1].split('.');
    const aleatoryNumber = Math.floor(Math.random() * (999 - 100) + 100);

    const outputFilename = `${removeExt[0]}_${aleatoryNumber}.json`;

    function converter() {
        node_xj(
            {
                input: `./public/uploads/${filename}`,
                output: `./public/converted/${outputFilename}`,
                allowEmptyKey: false,
            },
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }
            }
        )
    }

    converter();

    setTimeout(() => {res.render('downloadPage', { outputFilename });}, 500)
    

}
