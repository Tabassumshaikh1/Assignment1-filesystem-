const http = require('http');
const fs=require('fs');
const e = require('express');
const PORT=1100;
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<html><body><h2 style="color:Green">File Handling Crud Operartions</h2></body></html>')
    }
    else if(req.url=="/createfile"){
        if(fs.existsSync("neosoft1.txt")){
            res.end("File is already exists");
        }
        else{
            fs.writeFile('neosoft1.txt',"Welcome to the neosoft 1 file",(err)=>{
                if(err) throw err
                else{
                    res.end("File is created")
                }
            })
            
        }
    }
    else if(req.url=="/readfile"){
        if(fs.existsSync("neosoft1.txt")){
            let data = fs.readFileSync("neosoft1.txt")
            res.end(data.toString());
        }
        else{
            res.end("File is not readed please check")
        }
    }
    else if(req.url=="/updatefile"){
        if(fs.existsSync("neosoft1.txt")){
            fs.appendFileSync("neosoft1.txt","This is apppended line this is new line")
            res.end("file is updated")
        }else{
            res.end("File is no updated");
        }
    }
    else if(req.url=="/deletefile"){
        if(fs.existsSync("neosoft1.txt")){
            fs.unlink("neosoft1.txt",(err)=>{
                if(err) throw err
                else{
                    res.end("File is deleted")
                }
            })
        }
        else{
            res.end("File is not exist")
        }
    }
    else{
        res.end("Enter Valid url")
    }
    
})
server.listen(PORT,(err)=>{
    if(err) throw err
    else
    console.log(`Server is on ${PORT}`);
})

