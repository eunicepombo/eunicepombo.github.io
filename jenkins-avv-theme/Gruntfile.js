module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                src: ["dist/"]
            }
        },
        less: {
            dist: {
                files: {
                    "dist/avv.css": "less/style.less",
                    "dist/avv-dark.css": "less/dark.less",
                }
            }
        },
        imageEmbed: {
            light: {
                src: ["dist/avv.css"],
                dest: "dist/avv.css",
                options: {
                    deleteAfterEncoding: false
                }
            },
            dark: {
                src: ["dist/avv-dark.css"],
                dest: "dist/avv-dark.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },
        cssmin: {
            minify: {
                files: {
                    'dist/avv.css': ['dist/avv.css'],
                    'dist/avv-dark.css': ['dist/avv-dark.css']
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{removeViewBox: true}]
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.svg'],
                    dest: 'images/'
                }]
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'less', 'imageEmbed', 'cssmin']);
};
