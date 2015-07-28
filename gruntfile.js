module.exports = function(grunt){

	//Configure tasks
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: 'src/js/*.js',
				dest: 'js/script.min.js'
			},
			dev: {
				options : {
					beautify:true,
					mangle:false,
					compress:false,
					preserveComments: 'all'
				},
				src: 'src/js/*.js',
				dest: 'js/script.min.js'
			}
		},
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'css/styles.css' : 'src/sass/styles.scss'
				}
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/styles.css' : 'src/sass/styles.scss'
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
			}
		}
	});

	//Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	//Register tasks
	grunt.registerTask('default',['uglify:dev','sass:dev']);
	grunt.registerTask('build',['uglify:build', 'sass:build']);

};