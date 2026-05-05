const YAML = require("yaml");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/styles');
    eleventyConfig.addWatchTarget('src/styles');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy("src/js");    

    eleventyConfig.addCollection('pages', (collection) => {
        return collection.getFilteredByGlob('src/pages/*.md');
    });

    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));

    return {
        pathPrefix: "/",
        dir: {
            input: 'src',
            output: "_site"
        },
    };
};

