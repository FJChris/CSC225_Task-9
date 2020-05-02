jQuery(document).ready(function ($) {
    $('#prep-form').on('submit', function(event) {
        event.preventDefault();
        if ($('#user-text').val() == '') {
            alert('You cannot leave this box empty!');
            console.log('Dumbo.');
        } else {
             $('#tasks').prepend('<p>' + $("#user-text").val() ); // Important: 'p' doesnt work, just adds the letter p
             console.log('Good Job!');
        }
    });
});