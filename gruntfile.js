module.exports = function(grunt){

	//Configure tasks
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: 'src/js/*.js',
				dest: 'script.min.js'
			},
			dev: {
				options : {
					beautify:true,
					mangle:false,
					compress:false,
					preserveComments: 'all'
				},
				src: 'src/js/*.js',
				dest: 'script.min.js'
			}
		},
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'styles.css' : 'src/sass/styles.scss'
				}
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'styles.css' : 'src/sass/styles.scss'
				}
			}
		},
		autoprefixer: {
            dev: {
                files: {
                    'styles.css': 'styles.css'
                }
            },
            build: {
                files: {
                    'styles.css': 'styles.css'
                }
            }
        },
		watch: {
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify:dev']
			},
			css: {
				files: ['src/sass/*.scss'],
				tasks: ['sass:dev']
			},
			autoprefixer: {
				files: ['styles.css'],
				tasks: ['autoprefixer:dev']
			}
		}
	});

	//Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	//Register tasks
	grunt.registerTask('default',['uglify:dev','sass:dev','autoprefixer:dev']);
	grunt.registerTask('build',['uglify:build', 'sass:build','autoprefixer:build']);

};