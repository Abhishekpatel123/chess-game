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
    console.log(matrix[this.position.y + 1][this.position.x], "tu");
    if (!matrix[this.position.y + 1][this.position.x])
      positions.push({
        x: this.position.x,
        y: this.position.y + 1,
      });
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
