const path = require('path');


const fn_hello = async (ctx, next) =>{
    ctx.type = 'html';
    const pathUrl = path.join(__dirname,'./static/upload.html');
    ctx.body = fs.createReadStream(pathUrl);
}


module.exports = {
    '/':fn_hello
}