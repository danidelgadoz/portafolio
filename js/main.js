console.log("Hola mundo");

$(function() {
    $.scrollify({
        section : ".section-scroll",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: false,
        standardScrollElements: ".skills",
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });

    $('#go').click(function(e){
        console.log("jajaja")
        console.log('$.scrollify.next()', $.scrollify.next())
    });
});



