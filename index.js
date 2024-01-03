const JSONServer = require('json-server')
const NPServer = JSONServer.create()
const router = JSONServer.router("db.json")
const middleware = JSONServer.defaults()
const PORT = 3000 || process.env.PORT
NPServer.use(middleware)
NPServer.use(router)

NPServer.listen(PORT,()=>{
    console.log(`NP Server started at port : ${PORT} and waiting for client request`);
})