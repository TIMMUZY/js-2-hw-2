function boom(stoppy) {
    return new Promise((can) => {
      setTimeout(() => {
        let sir = document.createElement('div');
        sir.className = 'sir';
        document.getElementById('box').appendChild(sir);
        can(); 
      }, stoppy);
    });
  }
  
  async function boom_two() {
    for (let i = 0; i < 4; i++) {
      await boom(2150); 
    }
  }
  
  boom_two();
  