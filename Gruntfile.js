'use strict';
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  grunt.initConfig({
    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'es5/index.js': 'es6/index.js'
            }
        }
    },
    watch: {
      scripts: {
        files: ['es6/index.js'],
        tasks: ['babel'],
        options: {
          spawn: false,
        },
      },
    },
  });
  grunt.registerTask('default', ['babel']);
};
