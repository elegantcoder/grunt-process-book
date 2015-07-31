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
                keepalive: true
            }
        }
    });
};
