// accordian start
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );
// accordian end

// auto complete start
$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
// auto complete end

// Product Selector start
  $( function() {
    $( "input" ).checkboxradio({
      icon: false
    });
  } );
// Product Selector end

// Datepicker start
$( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );
// Datepicker end

// Selectmenu start
  $( function() {
    var circle = $( "#circle" );
 
    $( "#radius" ).selectmenu({
      change: function( event, data ) {
        circle.css({
          width: data.item.value,
          height: data.item.value
        });
      }
     });
 
    $( "#color" ).selectmenu({
       change: function( event, data ) {
         circle.css( "background", data.item.value );
       }
     });
  } );
// Selectmenu end