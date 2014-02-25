exports.index = function(req, res){
  res.render('index', { title: 'Triumphant Tasks',
    scripts: ['bower_components/modernizr/modernizr.js',
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/fastclick/lib/fastclick.js',
              'bower_components/foundation/js/foundation.min.js',
              'javascripts/driver.js']
  });
};