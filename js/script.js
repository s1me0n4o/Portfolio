// start JS document


// for (var i = 0; i <= 10; i++) {
//     var selektor = "\"active-" + i + "\"spans:nth-child(n+" + i + ")\"";
//     var skills = document.getElementsByClassName(selektor)
//     for (var k = 0; k < skills.length; k++) {

//         console.log(skills);
//     }
// }
// function on() {
//     document.getElementById("thumb-overlay").style.display = "block";
// }

// function off() {
//     document.getElementById("thumb-overlay").style.display = "none";
// }

$(function() {
    smoothScrool(300);
    workBelt();
});

function smoothScrool(duration) {
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

function workBelt() {
    $('.thumb-container').click(function() {
        $('.work-belt').css('left', '-100%');

    });

    $('work-return').click(function() {
        $('.work-belt').css('left', '0%');

    });
}