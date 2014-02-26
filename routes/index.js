exports.index = function(req, res){
  res.render('index', {
    scriptsHead: ['bower_components/modernizr/modernizr.js'],
    scriptsBody: ['bower_components/jquery/dist/jquery.min.js',
                   'bower_components/fastclick/lib/fastclick.js',
                   'bower_components/foundation/js/foundation.min.js',
                   'javascripts/driver.js']
  });
};