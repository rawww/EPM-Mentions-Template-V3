$(document).foundation()

//headroom (https://wicky.nillia.ms/headroom.js/)

// grab an element
var myElement = document.querySelector(".block-header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

//file uploads

$(document).ready(function(){
    $('#file-upload').change(function(e){
        var initial = e.target.files[0].name;
        //alert('The file "' + fileName +  '" has been selected.');
        var split = initial.split('.');
        var filename = split[0];
        var extension = split[1];

        if (filename.length > 32) {
          filename = filename.substring(0, 29);
        }

        var result = filename + '...';

        $('.file-name').text(result);
    });
});


//move and close icon graphic hover over states

$(".move").on({
 "mouseover" : function() {
    this.src = 'img/icons/move-over.png';
  },
  "mouseout" : function() {
    this.src='img/icons/move.png';
  }
});

$(".close").on({
 "mouseover" : function() {
    this.src = 'img/icons/close-over.png';
  },
  "mouseout" : function() {
    this.src='img/icons/close.png';
  }
});


//close sidebar


$( ".close-sidebar" ).click(function() {

  $(".close-tab.open").toggle();

  $(".sidebar").toggle();

  $( ".block-edit .main" ).toggleClass( "small-12" )

})

//owl carousel used for 'add to dasboard' navigation - https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    autoWidth:true,
    items:5,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
}
})

// data table init on edit screen

$(document).ready(function() {
    var table = $('#sortabletable').DataTable( {
        "dom": '<f<t>lfip>',
        "scrollX": true,
        "autoWidth": true,
        "pagingType": "simple_numbers",
        "oLanguage": {
          "sLengthMenu": "Rows per page: _MENU_ ",
          "sZeroRecords": "No data available in table",
          "sInfo": "_START_ - _END_ of _TOTAL_"
        },


    } );

    $('#search-table').on( 'keyup', function () {
      table.search( this.value ).draw();
  } );
} );

// data table init on dashboard screen

$(document).ready(function() {
    var table = $('#sortabletable-dash').DataTable( {
        "dom": '<f<t>>',
        "scrollX": true,
        "scrollY": '240px',
        "autoWidth": true,
        "oLanguage": {
          "sLengthMenu": "Rows per page: _MENU_ ",
          "sZeroRecords": "No data available in table",
          "sInfo": "_START_ - _END_ of _TOTAL_"
        },


    } );

    $('#search-table').on( 'keyup', function () {
      table.search( this.value ).draw();
  } );
} );
