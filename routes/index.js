


const fn_index = async (ctx, next) =>{
    ctx.type = 'html';
    const pathUrl = path.join(__dirname,'./static/upload.html');
    ctx.body = fs.createReadStream(pathUrl);
}


module.exports = {
    '/':fn_index
}