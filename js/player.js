class Pawn {
  //sanik
  image = "./images/pawn.svg";
  position = { x: 0, y: 0 };

  constructor(x, y, type, id) {
    this.id = id;
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }

  showMoves(matrix) {
    const positions = [];
    console.log(this.type)
    console.log(matrix[this.position.y + 1][this.position.x], "tu");
    if(this.type === 0){
      if (matrix[this.position.y + 1][this.position.x - 1] && matrix[this.position.y + 1][this.position.x - 1].type == 1) {
        positions.push({
          x : this.position.x - 1,
          y : this.position.y + 1
        })
      }
      if (matrix[this.position.y + 1][this.position.x + 1] && matrix[this.position.y + 1][this.position.x + 1].type == 1) {
        positions.push({
          x : this.position.x + 1,
          y : this.position.y + 1
        })
      }
    if (!matrix[this.position.y + 1][this.position.x])
      positions.push({
        x: this.position.x,
        y: this.position.y + 1,
      });

    if (this.position.y == 1) {
      positions.push({
        x: this.position.x,
        y: this.position.y + 2,
      });
    }
  }else{
    if (matrix[this.position.y - 1][this.position.x - 1] && matrix[this.position.y - 1][this.position.x - 1].type == 0) {
      positions.push({
        x : this.position.x - 1,
        y : this.position.y - 1
      })
    }
    if (matrix[this.position.y - 1][this.position.x + 1] && matrix[this.position.y - 1][this.position.x + 1].type == 0) {
      positions.push({
        x : this.position.x + 1,
        y : this.position.y - 1
      })
    }

    if (!matrix[this.position.y - 1][this.position.x])
      positions.push({
        x: this.position.x,
        y: this.position.y - 1,
      });

    if (this.position.y == 6) {
      positions.push({
        x: this.position.x,
        y: this.position.y - 2,
      });
    }
  }
    return positions;
  }

  move(pos) {
    this.position.x = pos.x;
    this.position.y = pos.y;
  }
}

//hathi
class Rook {
  position = {
    x: 0,
    y: 0,
  };

  image = "./images/rook.png";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }

  showMoves(matrix) {
    const positions = [];
    console.log(this.type)
    console.log(matrix[this.position.y + 1][this.position.x], "tu");
    if(this.type === 0){
      if (matrix[this.position.y + 1][this.position.x - 1] && matrix[this.position.y + 1][this.position.x - 1].type == 1) {
        positions.push({
          x : this.position.x - 1,
          y : this.position.y + 1
        })
      }
      if (matrix[this.position.y + 1][this.position.x + 1] && matrix[this.position.y + 1][this.position.x + 1].type == 1) {
        positions.push({
          x : this.position.x + 1,
          y : this.position.y + 1
        })
      }
    if (!matrix[this.position.y + 1][this.position.x])
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
      }
      positions.push({
        x: this.position.x,
        y: this.position.y + 1,
      });

    if (this.position.y == 1) {
      positions.push({
        x: this.position.x,
        y: this.position.y + 2,
      });
    }
  }else{
    if (matrix[this.position.y - 1][this.position.x - 1] && matrix[this.position.y - 1][this.position.x - 1].type == 0) {
      positions.push({
        x : this.position.x - 1,
        y : this.position.y - 1
      })
    }
    if (matrix[this.position.y - 1][this.position.x + 1] && matrix[this.position.y - 1][this.position.x + 1].type == 0) {
      positions.push({
        x : this.position.x + 1,
        y : this.position.y - 1
      })
    }

    if (!matrix[this.position.y - 1][this.position.x])
      positions.push({
        x: this.position.x,
        y: this.position.y - 1,
      });

    if (this.position.y == 6) {
      positions.push({
        x: this.position.x,
        y: this.position.y - 2,
      });
    }
  }
    return positions;
  }

  move(pos) {
    this.position.x = pos.x;
    this.position.y = pos.y;
  }

}

//camel
class Bishop {
  position = {
    x: 0,
    y: 0,
  };

  image = "";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }
}
class King {
  position = {
    x: 0,
    y: 0,
  };

  image = "";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }
}

//horse
class Knight {
  position = {
    x: 0,
    y: 0,
  };

  image = "";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }
}

class Queen {
  position = {
    x: 0,
    y: 0,
  };

  image = "";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }
}
