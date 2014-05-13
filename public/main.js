$(document).ready(function() {
  $('#parse').click(function() {
    try {
      var result = musicL.parse($('#input').val());
      $('#output').html(JSON.stringify(result,undefined,2));
      //$('#partitura').html('<canvas id="lienzo" width=625 height=160> </canvas>');
      
//       var lienzo = $('#lienzo');
//       var renderer = new Vex.Flow.Renderer(lienzo,Vex.Flow.Renderer.Backends.CANVAS); // Fallo aquí...
//       var ctx = renderer.getContext();
//       renderer.size(500,300);
//       ctx.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
//       
//       var stave = new Vex.Flow.Stave(10, 0, 500);
//       stave.addClef("treble");
//       stave.setContext(ctx).draw();
    } catch (e) {
      $('#output').html('<div class="error"><pre>\n' + String(e) + '\n</pre></div>');
    }
  });
  
  $('#DoM').click(function () {
    $('#input').val('SOL 0 2/4 C4 D4 | E4 F4 | G4 A4 | B4 C4 ||');
  });
  
  $('#FaM').click(function () {
    $('#input').val('SOL 1b 2/4 F4 G4 | A4 B4 | C4 D4 | E4 F4 ||');
  });
    
   $('#EbM').click(function () {
    $('#input').val('SOL 3b 2/4 E4 F4 | G4 A4 | B4 C4 | D4 E4 ||');
  });
      
  $('#Lam').click(function () {
    $('#input').val('SOL 0 2/4 A4 B4 | C4 D4 | E4 F#4 | G#4 A4 ||');
  });

  $("#examples").change(function(ev) {
    var f = ev.target.files[0]; 
    var r = new FileReader();
    r.onload = function(e) { 
      var contents = e.target.result;
      
      input.innerHTML = contents;
    }
    r.readAsText(f);
  });

});