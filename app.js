// In this code, since we are dynamically adding the list elements and since the page only reload once and so, when we perform the keyPress methid, the html don not contains the newely added list items and so, we will be using another methid  { on } - > this will help make the ul list dynamic and will heklp perform adding other elements in the DOM

// $('li').click(function () {
//     $(this).toggleClass('completed');
// })


// To Perfrom CSS Strike Through
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});


// To Add the Element
$('#inp').keypress(function (e) {
    const todoText = $(this).val();
    if(e.which === 13){
        $('#list').append(`<li><span>X&nbsp;&nbsp;</span> ${ todoText } </li>`);
        $(this).val('');
    }
})


// To Remove the List item
$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut( function () {
        // here { this } is referring to the parent element of span tag that is { li } 
        $(this).remove();           // we need not to define the parent element here, since the above functio all parent methid is already targetting to the List element, which is out required target
    });
    
    e.stopPropagation();                 // this methid will stop other event or methid to be called or exectuted during this current event and wil eventually, do not calls the  { first - >  toggleClass method and, the list items will not strike through after clicking the Delete button, and will just delete with fde effect}
})


// Hiding { + } plus button when clicked
$('#plus').click(function () {
    $('#inp').fadeToggle();
})