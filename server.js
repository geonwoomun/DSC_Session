const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
   const {path} = url.parse(req.url);
   res.write(path);
   res.end(); 
})

server.listen(3000, () => console.log('서버 열렸다'));