module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-helloworld');
    grunt.config('helloworld', {
        options: {},
        target1: {
            options: {}
        },
        target2: {
            options: {}
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.config('connect', {
        server: {
            options: {
                open: true,
                base: ['app'],
                keepalive: false,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch',{
        Gruntfile: {
            files: 'Gruntfile.js',
            options: {
                reload: true
            }
        },
        html: {
            files: 'app/*.html',
            options: {
                livereload: true
            }
        }
    });
};
