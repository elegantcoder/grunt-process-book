module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-helloworld');

    grunt.initConfig({
        helloworld: {
            options: {},
            target1: {
                options: {}
            },
            target2: {
                options: {}
            },

        }
    });
};
