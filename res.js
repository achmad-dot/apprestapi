'use strict';
exports.ok = function(values,res){
    var data  = {
        'status' : 200,
        'valus' : values
    }
    res.json(data);
    res.end();
}