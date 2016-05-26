var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect().use(serveStatic('dist',{'setHeaders':setHeaders})).listen(4000);