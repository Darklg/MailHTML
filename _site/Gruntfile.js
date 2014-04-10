module.exports = function(grunt) {

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jekyll: {
            options: {
                config: '_config.yml',
                src: 'src',
                dest: 'build'
            },
            dev: {}
        },
        shell: {
            jekyll: {
                command: 'jekyll build;'
            }
        },
    });

    // Modules
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-shell');

    // Tasks
    grunt.registerTask('default', [
        'jekyll:dev'
    ]);

};