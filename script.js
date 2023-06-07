function convert() {
    var meters = document.getElementById('metersInput').value;
    var feet = meters * 3.28084;
    var inches = meters * 39.3701;
    var mile = meters * .00062137;
    var yard = meters * 1.09361;
    
    document.getElementById('feetOutput').value = feet;
    document.getElementById('inchesOutput').value = inches;
    document.getElementById('mileOutput').value = mile;
    document.getElementById('yardOutput').value = yard;
  }