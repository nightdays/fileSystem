let fs = require('fs');
let pathUtil = require('path');
let fileService = require("./service/fileService");
module.exports = {

    getFileList: function(req,res) {
        let param = { dir: '/' };
        if (req.body.dir) {
            param.dir = req.body.dir;
        }
        let menu = { children: [] };
        fileService.getFileList(param.dir , menu);
        if (menu) {
            let result = {success:true, data : { currentPath : param.dir , menu : menu.children }};
            res.send(result);
        } else {
            let result = {success:true, data : {}};
            res.send(result);
        }
    }

}