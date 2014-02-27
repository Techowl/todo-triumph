module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/stylesheets/app.css': 'scss/app.scss'
        }
      }
    },

    express: {
      options: {
        port: 1337
      },

      dev: {
        options: {
          script: 'app.js'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      grunt: { files: ['gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      markup: {
        files: 'views/**/*.jade'
      },

      express: {
        files:  [ 'app.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      }
    },

    jshint: {
      all: [
        'gruntfile.js',
        'javascripts/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-vows-runner');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('server', ['express:dev', 'watch'])
  grunt.registerTask('test', ['jshint', 'jasmine', 'vows']);
  grunt.registerTask('default', ['build', 'uglify', 'test']);

};
