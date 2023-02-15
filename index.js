const div = document.querySelectorAll('div');
const section = document.querySelector('section');

const { prototype } = NodeList;

prototype.positionSpeed = function (speed) {
  this.forEach(item => {
    item.style.left = Math.random() * window.innerWidth + 'px';
    item.style.top = Math.random() * window.innerHeight - 20 + 'px';
  });

  
  function roundNumber(number) {
    return Math.round(number.toString().replace('px', ''));
  }

  const colors = {
    red: 0,
    green: 0,
    blue: 0
  }

  this.forEach(item => {
    let [x, y] = this.moveSpeed;
    [x, y] = [x + Math.round(Math.random() * 5), y + Math.round(Math.random() * 5)];
    function move() {
      if (roundNumber(item.style.left) + 55 > roundNumber(window.innerWidth)) {
        x = -x;
      }
      if (roundNumber(item.style.top) + 55 > roundNumber(window.innerHeight)) {
        y = -y;
      }
      if (roundNumber(item.style.left) < 0) {
        x = Math.abs(x);
      }
      if (roundNumber(item.style.top) < 0) {
        y = Math.abs(y);
      }
      item.style.left = roundNumber(item.style.left) + x + 'px';
      item.style.top = roundNumber(item.style.top) + y + 'px';
      going = setTimeout(move.bind(this), speed * 1000);

      switch (item.className) {
        case 'red':
          colors.red = roundNumber(item.style.top) / 2;
          break;
        
        case 'green':
          colors.green = roundNumber(item.style.top) / 2;
          break;
        
        case 'blue':
          colors.blue = roundNumber(item.style.top) / 2;
          break;
      
        default:
          break;
      }
      section.style.backgroundColor = `rgb(${colors.red},${colors.green},${colors.blue})`;
    }
    
    let going = setTimeout(move.bind(this), speed * 1000);
  });

}

prototype.moveSpeed = [3, 1];

div.positionSpeed(0.01);
