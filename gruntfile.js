module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

     concat: {
    dist: {
        src: [
            'src/js/*.js', // All JS files
        ],
        dest: 'src/js/production.js',
    }
},

        clean: {
            build: {
                src: ['src/js/production.js']
            }
        },



	uglify: {
    build: {
        files: {
            'js/production.min.js': ['src/js/production.js']
        }
    }
},

        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['src/index.html'], dest: '.'},
                    {expand: true, flatten: true, src: ['src/fonts/**/*'], dest: 'fonts'},
                    {expand: true, flatten: true, src: ['src/css/bootstrap.min.css', 'src/css/font-awesome.min.css'], dest: 'css'}
                ]
            }
        },


imagemin: {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'src/images/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'images'
      }]
    }
  },

 autoprefixer: {
            dist: {
                files: {
                    'src/css/effectspre.css': 'src/css/effects.css'
                }
            }
        },

 // configure cssmin to minify css files ------------------------------------
    cssmin: {
      build: {
        files: {
          'css/effects.min.css': 'src/css/effectspre.css'
        }
      }
    },

  });




    // 3. Where we tell Grunt we plan to use this plug-in.

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-contrib-clean');


	grunt.registerTask('default', ['clean', 'concat', 'uglify', 'imagemin', 'autoprefixer','cssmin', 'copy']);

};
