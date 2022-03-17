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

  image = "./images/rook.svg";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }

  showMoves(matrix) {
    const positions = [];
    console.log(this.type);
    if (this.type == 0) {
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
    } else {
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

  image = "./images/bishop.svg";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }

  showMoves(matrix) {
    const positions = [];
    console.log(this.type);
    if (this.type == 0) {
      let isYou = false;
      let i = this.position.y + 1;
      let j = this.position.x + 1;
      while (!isYou && i < 8 && j < 8) {
        if (matrix[i][j]) {
          if (matrix[i][j].type == 1) {
            positions.push({
              x: j,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: j,
            y: i,
          });
          i++;
          j++;
        }
      }
      isYou = false;

      i = this.position.y - 1;
      j = this.position.x - 1;
      while (!isYou && i >= 0 && j >= 0) {
        if (matrix[i][j]) {
          if (matrix[i][j].type == 1) {
            positions.push({
              x: j,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: j,
            y: i,
          });
          i--;
          j--;
        }
      }

      isYou = false;

      i = this.position.y + 1;
      j = this.position.x - 1;
      while (!isYou && i < 8 && j >= 0) {
        if (matrix[i][j]) {
          if (matrix[i][j].type == 1) {
            positions.push({
              x: j,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: j,
            y: i,
          });
          i++;
          j--;
        }
      }
      isYou = false;

      i = this.position.y - 1;
      j = this.position.x + 1;
      while (!isYou && i >= 0 && j < 8) {
        if (matrix[i][j]) {
          if (matrix[i][j].type == 1) {
            positions.push({
              x: j,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: j,
            y: i,
          });
          i--;
          j++;
        }
      }

      isYou = false;
    } else {
      let isYou = false;
      let i = this.position.y + 1;
      let j = this.position.x + 1;
      while (!isYou && i < 8 && j < 8) {
        if (matrix[i][j]) {
          if (matrix[i][j].type == 0) {
            positions.push({
              x: j,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: j,
            y: i,
          });
          i++;
          j++;
        }
      }
      isYou = false;

      i = this.position.y - 1;
      j = this.position.x - 1;
      while (!isYou && i >= 0 && j >= 0) {
        if (matrix[i][j]) {
          if (matrix[i][j].type == 0) {
            positions.push({
              x: j,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: j,
            y: i,
          });
          i--;
          j--;
        }
      }

      isYou = false;

      i = this.position.y + 1;
      j = this.position.x - 1;
      while (!isYou && i < 8 && j >= 0) {
        if (matrix[i][j]) {
          if (matrix[i][j].type == 0) {
            positions.push({
              x: j,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: j,
            y: i,
          });
          i++;
          j--;
        }
      }
      isYou = false;

      i = this.position.y - 1;
      j = this.position.x + 1;
      while (!isYou && i >= 0 && j < 8) {
        if (matrix[i][j]) {
          if (matrix[i][j].type == 0) {
            positions.push({
              x: j,
              y: i,
            });
          }
          isYou = true;
        } else {
          positions.push({
            x: j,
            y: i,
          });
          i--;
          j++;
        }
      }

      isYou = false;
    }
    return positions;
  }

  move(pos) {
    this.position.x = pos.x;
    this.position.y = pos.y;
  }
}

class King {
  position = {
    x: 0,
    y: 0,
  };

  image = "./images/king.svg";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }

  showMoves(matrix) {
    let positions = [];

    if (this.type == 0) {
      let j = this.position.y;
      let i = this.position.x;

      for (let count = 0; count < 3; count++) {
        i = this.position.x + count - 1;
        for (let xcount = 0; xcount < 3; xcount++) {
          j = this.position.y + xcount - 1;
          if (j != this.position.y && i != this.position.x) {
            if (i < 8 && j < 8 && i >= 0 && j >= 0) {
              if (matrix[j][i]) {
                if (matrix[j][i].type == 1) {
                  positions.push({
                    x: i,
                    y: j,
                  });
                }
              } else {
                positions.push({
                  x: i,
                  y: j,
                });
              }
            }
          }
        }
      }
    } else {
      let j = this.position.y - 1;
      let i = this.position.x - 1;

      for (let count = 0; count < 3; count++) {
        for (let xcount = 0; xcount < 3; xcount++) {
          if (j !== this.position.y && i !== this.position.x) {
            if (i < 8 && j < 8 && i >= 0 && j >= 0) {
              if (matrix[j][i]) {
                if (matrix[i][j].type == 1) {
                  positions.push({
                    x: j,
                    y: i,
                  });
                }
              } else {
                positions.push({
                  x: j,
                  y: i,
                });
              }
            }
          }
          j = this.position.x + xcount;
        }
        i = this.position.y + count;
      }
    }

    return positions;
  }

  move(pos) {
    this.position.x = pos.x;
    this.position.y = pos.y;
  }
}

//horse
class Knight {
  position = {
    x: 0,
    y: 0,
  };

  image = "./images/knight.svg";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }

  showMoves(matrix) {
    const positions = [];
    if (this.type === 0) {
      const [x, y] = [this.position.x, this.position.y];
      let i = y + 2;
      if (i < 8) {
        if (x - 1 >= 0) {
          if (!matrix[i][x - 1])
            positions.push({
              x: x - 1,
              y: i,
            });
          else if (matrix[i][x - 1].type === 1)
            positions.push({
              x: x - 1,
              y: i,
            });
        }
        if (x + 1 < 8) {
          if (!matrix[i][x - 1])
            positions.push({
              x: x + 1,
              y: i,
            });
          else if (matrix[i][x + 1].type === 1)
            positions.push({
              x: x + 1,
              y: i,
            });
        }
      }
      i = y - 2;
      if (i >= 0) {
        if (x - 1 >= 0) {
          if (!matrix[i][x - 1])
            positions.push({
              x: x - 1,
              y: i,
            });
          else if (matrix[i][x - 1].type === 1)
            positions.push({
              x: x - 1,
              y: i,
            });
        }
        if (x + 1 < 8) {
          if (!matrix[i][x + 1])
            positions.push({
              x: x + 1,
              y: i,
            });
          else if (matrix[i][x + 1].type === 1)
            positions.push({
              x: x + 1,
              y: i,
            });
        }
      }

      i = x + 2;
      if (i < 8) {
        if (y - 1 >= 0) {
          if (!matrix[y - 1][i])
            positions.push({
              x: i,
              y: y - 1,
            });
          else if (matrix[y - 1][i].type === 1)
            positions.push({
              x: i,
              y: y - 1,
            });
        }
        if (y + 1 < 8) {
          if (!matrix[y + 1][i])
            positions.push({
              x: i,
              y: y + 1,
            });
          else if (matrix[y + 1][i].type === 1)
            positions.push({
              x: i,
              y: y + 1,
            });
        }
      }
      i = x - 2;
      if (i >= 0) {
        if (y - 1 >= 0) {
          if (!matrix[y - 1][i])
            positions.push({
              x: i,
              y: y - 1,
            });
          else if (matrix[y - 1][i].type === 1)
            positions.push({
              x: i,
              y: y - 1,
            });
        }
        if (y + 1 < 8) {
          if (!matrix[y + 1][i])
            positions.push({
              x: i,
              y: y + 1,
            });
          else if (matrix[y + 1][i].type === 1)
            positions.push({
              x: i,
              y: y + 1,
            });
        }
      }
    } else {
      const [x, y] = [this.position.x, this.position.y];
      let i = y + 2;
      if (i < 8) {
        if (x - 1 >= 0) {
          if (!matrix[i][x - 1])
            positions.push({
              x: x - 1,
              y: i,
            });
          else if (matrix[i][x - 1].type === 0)
            positions.push({
              x: x - 1,
              y: i,
            });
        }
        if (x + 1 < 8) {
          if (!matrix[i][x - 1])
            positions.push({
              x: x + 1,
              y: i,
            });
          else if (matrix[i][x + 1].type === 0)
            positions.push({
              x: x + 1,
              y: i,
            });
        }
      }
      i = y - 2;
      if (i >= 0) {
        if (x - 1 >= 0) {
          if (!matrix[i][x - 1])
            positions.push({
              x: x - 1,
              y: i,
            });
          else if (matrix[i][x - 1].type === 0)
            positions.push({
              x: x - 1,
              y: i,
            });
        }
        if (x + 1 < 8) {
          if (!matrix[i][x + 1])
            positions.push({
              x: x + 1,
              y: i,
            });
          else if (matrix[i][x + 1].type === 0)
            positions.push({
              x: x + 1,
              y: i,
            });
        }
      }

      i = x + 2;
      if (i < 8) {
        if (y - 1 >= 0) {
          if (!matrix[y - 1][i])
            positions.push({
              x: i,
              y: y - 1,
            });
          else if (matrix[y - 1][i].type === 0)
            positions.push({
              x: i,
              y: y - 1,
            });
        }
        if (y + 1 < 8) {
          if (!matrix[y + 1][i])
            positions.push({
              x: i,
              y: y + 1,
            });
          else if (matrix[y + 1][i].type === 0)
            positions.push({
              x: i,
              y: y + 1,
            });
        }
      }
      i = x - 2;
      if (i >= 0) {
        if (y - 1 >= 0) {
          if (!matrix[y - 1][i])
            positions.push({
              x: i,
              y: y - 1,
            });
          else if (matrix[y - 1][i].type === 0)
            positions.push({
              x: i,
              y: y - 1,
            });
        }
        if (y + 1 < 8) {
          if (!matrix[y + 1][i])
            positions.push({
              x: i,
              y: y + 1,
            });
          else if (matrix[y + 1][i].type === 0)
            positions.push({
              x: i,
              y: y + 1,
            });
        }
      }
    }
    return positions;
  }

  move(pos) {
    this.position.x = pos.x;
    this.position.y = pos.y;
  }
}

class Queen {
  position = {
    x: 0,
    y: 0,
  };

  image = "./images/queen.svg";

  constructor(x, y, type) {
    this.type = type;
    this.position.x = x;
    this.position.y = y;
  }
}
