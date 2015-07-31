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
};
