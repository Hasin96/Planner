// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code

(function () {


    //.................................................. 
    // HTML TEMPLATING FUNCTION
    //..................................................

    window.createHtml = function (templateId) {

        var $clone = $(document.createElement('div'));

        var $source = $(templateId);

        $clone.append($source.html());

        var htmlOut = $clone.html();

        return htmlOut;
    };

})();
