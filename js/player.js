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
    console.log(this.type);
    console.log(matrix[this.position.y + 1][this.position.x], "tu");
    if (this.type === 0) {
      if (
        matrix[this.position.y + 1][this.position.x - 1] &&
        matrix[this.position.y + 1][this.position.x - 1].type == 1
      ) {
        positions.push({
          x: this.position.x - 1,
          y: this.position.y + 1,
        });
      }
      if (
        matrix[this.position.y + 1][this.position.x + 1] &&
        matrix[this.position.y + 1][this.position.x + 1].type == 1
      ) {
        positions.push({
          x: this.position.x + 1,
          y: this.position.y + 1,
        });
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
    } else {
      if (
        matrix[this.position.y - 1][this.position.x - 1] &&
        matrix[this.position.y - 1][this.position.x - 1].type == 0
      ) {
        positions.push({
          x: this.position.x - 1,
          y: this.position.y - 1,
        });
      }
      if (
        matrix[this.position.y - 1][this.position.x + 1] &&
        matrix[this.position.y - 1][this.position.x + 1].type == 0
      ) {
        positions.push({
          x: this.position.x + 1,
          y: this.position.y - 1,
        });
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
    console.log(this.type);
    // console.log(matrix[this.position.y + 1][this.position.x], "tu");
    if (this.type == 0) {
      // if (
      //   matrix[this.position.y + 1][this.position.x - 1] &&
      //   matrix[this.position.y + 1][this.position.x - 1].type == 1
      // ) {
      //   positions.push({
      //     x: this.position.x - 1,
      //     y: this.position.y + 1,
      //   });
      // }
      // if (
      //   matrix[this.position.y + 1][this.position.x + 1] &&
      //   matrix[this.position.y + 1][this.position.x + 1].type == 1
      // ) {
      //   positions.push({
      //     x: this.position.x + 1,
      //     y: this.position.y + 1,
      //   });
      // }
      let isYou = false;
      let i = this.position.y + 1;
      while (!isYou && i < 8) {
        if (matrix[i][this.position.x]) {
          if (matrix[i][this.position.x].type == 1) {
            positions.push({
              x: this.position.x,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: this.position.x,
            y: i,
          });
          i++;
        }
      }
      isYou = false;

      i = this.position.y - 1;
      while (!isYou && i >= 0) {
        if (matrix[i][this.position.x]) {
          if (matrix[i][this.position.x].type == 1) {
            positions.push({
              x: this.position.x,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: this.position.x,
            y: i,
          });
          i--;
        }
      }

      isYou = false;

      i = this.position.x + 1;
      while (!isYou && i < 8) {
        if (matrix[this.position.y][i]) {
          if (matrix[this.position.y][i].type == 1) {
            positions.push({
              x: i,
              y: this.position.y,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: i,
            y: this.position.y,
          });
          i++;
        }
      }

      isYou = false;

      i = this.position.x - 1;
      while (!isYou && i >= 0) {
        if (matrix[this.position.y][i]) {
          if (matrix[this.position.y][i].type == 1) {
            positions.push({
              x: i,
              y: this.position.y,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: i,
            y: this.position.y,
          });
          i--;
        }
      }
      isYou = false;
      // positions.push({
      //   x: this.position.x,
      //   y: this.position.y + 1,
      // });

      // if (this.position.y == 1) {
      //   positions.push({
      //     x: this.position.x,
      //     y: this.position.y + 2,
      //   });
      // }
    } else {
      // if (
      //   matrix[this.position.y - 1][this.position.x - 1] &&
      //   matrix[this.position.y - 1][this.position.x - 1].type == 0
      // ) {
      //   positions.push({
      //     x: this.position.x - 1,
      //     y: this.position.y - 1,
      //   });
      // }
      // if (
      //   matrix[this.position.y - 1][this.position.x + 1] &&
      //   matrix[this.position.y - 1][this.position.x + 1].type == 0
      // ) {
      //   positions.push({
      //     x: this.position.x + 1,
      //     y: this.position.y - 1,
      //   });
      // }

      let isYou = false;
      let i = this.position.y + 1;
      while (!isYou && i < 8) {
        if (matrix[i][this.position.x]) {
          if (matrix[i][this.position.x].type == 0) {
            positions.push({
              x: this.position.x,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: this.position.x,
            y: i,
          });
          i++;
        }
      }
      isYou = false;

      i = this.position.y - 1;
      while (!isYou && i >= 0) {
        if (matrix[i][this.position.x]) {
          if (matrix[i][this.position.x].type == 0) {
            positions.push({
              x: this.position.x,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: this.position.x,
            y: i,
          });
          i--;
        }
      }

      isYou = false;

      i = this.position.x + 1;
      while (!isYou && i < 8) {
        if (matrix[this.position.y][i]) {
          if (matrix[this.position.y][i].type == 0) {
            positions.push({
              x: i,
              y: this.position.y,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: i,
            y: this.position.y,
          });
          i++;
        }
      }

      isYou = false;

      i = this.position.x - 1;
      while (!isYou && i >= 0) {
        if (matrix[this.position.y][i]) {
          if (matrix[this.position.y][i].type == 0) {
            positions.push({
              x: i,
              y: this.position.y,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: i,
            y: this.position.y,
          });
          i--;
        }
      }
      isYou = false;


      //   positions.push({
      //     x: this.position.x,
      //     y: this.position.y - 1,
      //   });

      // if (this.position.y == 6) {
      //   positions.push({
      //     x: this.position.x,
      //     y: this.position.y - 2,
      //   });
      // }
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
