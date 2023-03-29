const fs = require('fs')
const rootPath = require('app-root-path');

exports.getIndex = (req, res)=>{
    const data = [];

    //* Reading The links file
    fs.readFile(`${rootPath.path}/data/links.json`, (err, links)=>{
        if(err){ //* checking if there is a problem with opening the file
            console.log(err);
        }else{
            //* parse the file and convert it to json
            const convLinks = JSON.parse(links.toString('utf-8'));
            for(const link of convLinks){
                data.push(link);
            }
            //* Readling The Second(Relations) file
            fs.readFile(`${rootPath.path}/data/relations.json`, (err, relations)=>{
                if(err){
                    console.log(err)
                }else{
                    const convRel = JSON.parse(relations.toString('utf-8'));
                    data.map((val, index)=>{
                        val.child = []
                        for(const relation of convRel){
                            if(val["id"] == relation["Relation_to"]){
                                if(!relation['alt'].startsWith('data'))
                                    val.child.push(relation['alt'])
                            }
                        }
                        val.child = new Set(val.child)
                    })
                    res.render('index',{
                        pageTitle : 'گراف',
                        data,
                    })
                }
            })
        }
    })

}