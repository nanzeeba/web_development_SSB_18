// Color Animation start
  $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
// Color Animation end

// toggle start
  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypesSecond" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect_2" ).toggle( selectedEffect, options, 500 );
    };
 
    // Set effect from select menu value
    $( "#button_2" ).on( "click", function() {
      runEffect();
    });
  } );
// toggle end 

// add class start
  $( function() {
    $( "#button_3" ).on( "click", function() {
      $( "#effect_3" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect_3" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );
// add class end

// remove class start
  $( function() {
    $( "#button_4" ).on( "click", function() {
      $( "#effect_4" ).removeClass( "newClass_4", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect_4" ).addClass( "newClass_4" );
      }, 1500 );
    }
  } );
// remove class end 

// Switch Class start
  $( function() {
    $( "#button_5" ).on( "click", function() {
      $( ".newClass_5" ).switchClass( "newClass_5", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass_5", 1000 );
    });
  } );
// Switch Class end
