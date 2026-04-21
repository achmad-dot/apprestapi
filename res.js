'use stric';
exports.ok = function(values,res){
    var data  = {
        'status' : 200,
        'valus' : values
    }
    res.josn(data);
    res.end();
}