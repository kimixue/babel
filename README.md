# babel
1 首先安装 node.js




  win 直接下载点击安装即可






2 接下来安装grunt




  npm install grunt -g




3 创建package.json




  npm init




4 安装依赖



  "grunt-babel": "^5.0.1",



   "grunt-contrib-watch": "^0.6.1",



   "load-grunt-tasks": "^3.1.0",



   "time-grunt": "^1.2.1"





   npm install @依赖 --save-dev





5  具体的gruntfile.js


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




5 执行grunt







关于es6 编译软件  推介babel和traceur 各有利弊 笔者更喜欢babel 编译出来的代码可读性换算可以




