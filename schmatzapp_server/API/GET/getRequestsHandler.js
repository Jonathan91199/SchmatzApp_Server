

module.exports = function getRequestsHandler(app){
    app.get('/test', (req, res)=>{ res.send('Test') })
    app.get('/hello', (req, res)=>{ res.send('hello') })
   
}