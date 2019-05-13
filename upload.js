const Koa = require('koa');
const fs = require('fs');
const path = require('path');


const router = require('koa-router')();

const koaBody = require('koa-body');

const static = require('koa-static');

const app = new Koa();

app.use(koaBody({
    multipart: true,
    formidable:{
        maxFileSize: 2 * 1024 * 1024,
        multipart: true
    }
}))

 app.use(static(path.join(__dirname,'./static')));

 app.use(router.routes());
 app.use(router.allowedMethods());


router.get('/',(ctx) => {
    ctx.type = 'html';
    const pathUrl = path.join(__dirname,'./static/upload.html');
    ctx.body = fs.createReadStream(pathUrl);
})

router.post('/upload',(ctx) => {
    const files = ctx.request.files.file;
    console.log(files.length);
    if( files.length){
        for(var i = 0;i < files.length; i++  ){
            console.log(files[i].name);
        }
    }

    ctx.response.body = {
        code: 0,
        success: true,
        data:{
            total:files.length
        }
    }
})

 app.listen(3000, () => {
    console.log('server is listen in 3000');
 })