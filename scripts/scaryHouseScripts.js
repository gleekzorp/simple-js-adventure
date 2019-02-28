function scared() {
    document.getElementById('welcomeWrapper').style.display='none'
    document.getElementById('doorLockedWrapper').style.display='none'
    document.getElementById('scaredWrapper').style.display='block'
  }

  function notScared() {
    document.getElementById('welcomeWrapper').style.display='none'
    document.getElementById('doorLockedWrapper').style.display='block'
  }

  function doorKickedDown() {
    document.getElementById('doorLockedWrapper').style.display='none'
    document.getElementById('doorKickedDownWrapper').style.display='block'
  }