module.exports = function(grunt) {
    grunt.initConfig({
        qunit: {
            files: ['tests/index.html']
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['qunit']);
};