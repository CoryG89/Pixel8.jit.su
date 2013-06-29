/** Automatically export all routes in this file's containing directory */
var fs = require('fs');
var path = require('path');

var exportDirectory = path.dirname(__filename);

var directoryItems = fs.readdirSync(exportDirectory);

var directoryPaths = directoryItems.map(function (item) {
    return path.join(exportDirectory, item);
});

var exportPaths = directoryPaths.filter(function (item) {
    var stat = fs.statSync(item);
    var extname = path.extname(item);
    var basename = path.basename(item, extname);

    var fileExport = stat.isFile() && extname === '.js' && basename !== 'index';
    var dirExport = stat.isDirectory() && fs.existsSync(item + '/index.js');

    return fileExport || dirExport;
});

var exportObject = {};
exportPaths.forEach(function (exportPath) {
    var anExport = null;
    var exportFilename = path.basename(exportPath);
    var exportName = path.basename(exportPath, '.js');

    try {
        anExport = require(exportPath);
    } catch (error) {
        console.error('Error exporting [%s]\n\n\t[%s]', exportPath, error);
    }

    if (anExport) exportObject[exportName] = anExport;
});

module.exports = exportObject;