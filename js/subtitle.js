$(document).ready(function() {
    var $element = $('#bubble');
    var phrases = [
        'Welcome to my Bio-Page',
        'My name is Sultanbek Khamidov',
        'But you can call me Sultan',
        'Here you can find almost every-thing about me',
        'Thanks for visitting this page',
        'Good Luck:)',
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1000);
            },
        });
    })();
});



