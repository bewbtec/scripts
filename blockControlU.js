document.onkeydown=function(e){
    if (e.ctrlKey && 
            (e.keyCode === 73 || 
             e.keyCode === 105 ||
              e.keyCode === 74 || 
             e.keyCode === 106 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            alert('Bloqueado!');
            return false;
        } else {
            return true;
        }
  }
