$(document).ready(function() {
  $('#parse').click(function() {
    try {
      var result = musicL.parse($('#input').val());
      $('#output').html(JSON.stringify(result,undefined,2));
      $('#lienzo').class = "mostrarlienzo";
      var canvas = $('#lienzo')[0];
      var renderer = new Vex.Flow.Renderer(canvas,Vex.Flow.Renderer.Backends.CANVAS);
        
        var ctx = renderer.getContext();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var stave = new Vex.Flow.Stave(10, 0, 650);
        
        if (result[0].clave == "SOL")
            stave.addClef("treble").setContext(ctx).draw();
        else if (result[0].clave == "FA")
            stave.addClef("bass").setContext(ctx).draw();
        
        stave.addTimeSignature(result[0].ritmo).setContext(ctx).draw();
        
        
        var keySignature = "C";
        if (result[0].armadura != "0") {
            if (result[0].armadura.search('b') != -1) {
                switch(result[0].armadura.substr(0,1)) {
                        case "1":
                            keySignature = "F";
                        break;
                        case "2":
                            keySignature = "Bb";
                        break;
                        case "3":
                            keySignature = "Eb";
                        break;
                        case "4":
                            keySignature = "Ab";
                        break;
                        case "5":
                            keySignature = "Db";
                        break;
                        case "6":
                            keySignature = "Gb";
                        break;
                        case "7":
                            keySignature = "Cb";
                        break;
                }
            }
            else if (result[0].armadura.search('#') != -1) {
                switch(result[0].armadura.substr(0,1)) {
                        case "1":
                            keySignature = "G";
                        break;
                        case "2":
                            keySignature = "D";
                        break;
                        case "3":
                            keySignature = "A";
                        break;
                        case "4":
                            keySignature = "E";
                        break;
                        case "5":
                            keySignature = "B";
                        break;
                        case "6":
                            keySignature = "F#";
                        break;
                        case "7":
                            keySignature = "C#";
                        break;
                }
            }
        }
        stave.addKeySignature(keySignature).setContext(ctx).draw();
        
        
        
        
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