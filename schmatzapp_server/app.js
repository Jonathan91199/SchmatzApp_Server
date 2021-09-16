var apiManager = require('./API/apiManager')
var initializeApplication = require('./General/initializeApplication')



var app = initializeApplication()
apiManager(app)




module.exports = app;
