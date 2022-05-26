var jsondata = require('../saral.json')
var und = require('underscore')

exports.get = function(req,res) {
    res.json(jsondata)
}

exports.post = function(req,res){
    if(req.body.id && req.body.name){
        jsondata.push(req.body)
        res.json(jsondata)
    }else{
        res.send('Some error occured..')
    }  
}

exports.put = function(req,res){
    if(req.params.id){
        und.each(jsondata,function(elem,index){
            if (req.params.id==elem.id){
                elem.id="53",
                elem.name="Understanding programming through recursion"
            }
        })
        res.json(jsondata)
    }else{
        console.log("Some error occured..")
    }
}

exports.delete = function(req,res){
    getindextodelete = -1
    if(req.params.id){
        und.each(jsondata,function(elem,index){
if (req.params.id==elem.id){
    getindextodelete=index
}
        })
        if(getindextodelete>-1)
        {
            jsondata.splice(getindextodelete,1)
        }
    res.json(jsondata)
    }else
    {
        console.log('Some error occured..')
    }
}

// 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