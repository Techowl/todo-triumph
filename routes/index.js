exports.index = function(req, res){
  res.render('index', { title: 'Triumphant Tasks', scripts: ['javascripts/driver.js', 'bower_components/jquery/dist/jquery.js']});
};