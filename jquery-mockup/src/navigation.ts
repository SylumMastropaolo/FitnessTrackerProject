import * as $ from 'jquery';
declare const navProperties: any;

$(function(){
    $("#header-placeholder").load("_header.html", function () {
        $("#nav-placeholder").load(navProperties.mainNav, function(){
            $(".nav-link").removeClass("active");
            $(`#${navProperties.currentSection}-link`).addClass("active");           
        });       
    } );
});
