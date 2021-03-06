const Board = document.getElementById("board");
let turn = team.self;

const Pawn1 = new Pawn(0, 1, team.self, `${team.self}Pawn1`);
const Pawn2 = new Pawn(1, 1, team.self, `${team.self}Pawn2`);
const Pawn3 = new Pawn(2, 1, team.self, `${team.self}Pawn3`);
const Pawn4 = new Pawn(3, 1, team.self, `${team.self}Pawn4`);
const Pawn5 = new Pawn(4, 1, team.self, `${team.self}Pawn5`);
const Pawn6 = new Pawn(5, 1, team.self, `${team.self}Pawn6`);
const Pawn7 = new Pawn(6, 1, team.self, `${team.self}Pawn7`);
const Pawn8 = new Pawn(7, 1, team.self, `${team.self}Pawn8`);

const Pawn9 = new Pawn(0, 6, team.opponent, `${team.opponent}Pawn8`);
const Pawn10 = new Pawn(1, 6, team.opponent, `${team.opponent}Pawn8`);
const Pawn11 = new Pawn(2, 6, team.opponent, `${team.opponent}Pawn8`);
const Pawn12 = new Pawn(3, 6, team.opponent, `${team.opponent}Pawn8`);
const Pawn13 = new Pawn(4, 6, team.opponent, `${team.opponent}Pawn8`);
const Pawn14 = new Pawn(5, 6, team.opponent, `${team.opponent}Pawn8`);
const Pawn15 = new Pawn(6, 6, team.opponent, `${team.opponent}Pawn8`);
const Pawn16 = new Pawn(7, 6, team.opponent, `${team.opponent}Pawn8`);

const Rook1 = new Rook(0 , 0 , team.self, `${team.self}Rook1`)
const Rook2 = new Rook(7 , 0 , team.self, `${team.self}Rook2`)

const Rook3 = new Rook(0 , 7 , team.opponent, `${team.opponent}Rook3`)
const Rook4 = new Rook(7 , 7 , team.opponent, `${team.opponent}Rook4`)

const Knight1 = new Knight(1 , 0 , team.self, `${team.self}Knight1`)
const Knight2 = new Knight(6 , 0 , team.self, `${team.self}Knight2`)

const Knight3 = new Knight(1 , 7 , team.opponent, `${team.opponent}Knight3`)
const Knight4 = new Knight(6 , 7 , team.opponent, `${team.opponent}Knight4`)

const Bishop1 = new Bishop(2 , 0 , team.self, `${team.self}Bishop`)
const Bishop2 = new Bishop(5 , 0 , team.self, `${team.self}Bishop`)

const Bishop3 = new Bishop(2 , 7 , team.opponent, `${team.opponent}Bishop`)
const Bishop4 = new Bishop(5 , 7 , team.opponent, `${team.opponent}Bishop`)

const Queen1 = new Queen(4 , 0 , team.self, `${team.self}Queen`)

const Queen2 = new Queen(4 , 7 , team.opponent, `${team.opponent}Queen`)

const King1 = new King(3 , 0 , team.self, `${team.self}King`)
const King2 = new King(3 , 7 , team.opponent, `${team.opponent}King`)

const matrix = [
  [Rook1, Knight1, Bishop1, King1, Queen1, Bishop2, Knight2, Rook2],
  [Pawn1, Pawn2, Pawn3, Pawn4, Pawn5, Pawn6, Pawn7, Pawn8],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [Pawn9, Pawn10, Pawn11, Pawn12, Pawn13, Pawn14, Pawn15, Pawn16],
  [Rook3, Knight3, Bishop3, King2, Queen2, Bishop4, Knight4, Rook4],
];

function draw() {
  matrix.forEach((row, y) => {
    row.forEach((col, x) => {
      Board.children[y].children[x].setAttribute("data-pos", `${y} ${x}`);
      const img = Board.children[y].children[x].firstElementChild;
      if (col) {
        console.log(col, "inside if comdigon ", x, y);
        Board.children[col.position.y].children[col.position.x].setAttribute(
          "data-id",
          `${matrix[col.position.y][col.position.x].id}`
        );
        Board.children[col.position.y].children[col.position.x].setAttribute(
          "data-team",
          `${matrix[col.position.y][col.position.x].type}`
        );
        if (img) return;
        Board.children[col.position.y].children[col.position.x].appendChild(
          insertImage(matrix[col.position.y][col.position.x].image, col.type)
        );
      } else {
        if (!img) return;
        Board.children[y].children[x].removeChild(img);
      }
    });
  });
}

draw();

function insertImage(url, type) {
  const image = document.createElement("img");
  image.src = url;
  if (type == 1) {
    image.style.filter = "grayscale(1)";
  }
  image.style.pointerEvents = "none";
  return image;
}

let allPreviewPostion = [];
let currentHighlight = null;

function showPosition() {
  allPreviewPostion.forEach((pos) => {
    Board.children[pos.y].children[pos.x].classList.add("success");
  });
}

function removeShowPosition() {
  console.log(allPreviewPostion, "all pre");
  allPreviewPostion.forEach((item) => {
    Board.children[item.y].children[item.x].classList.remove("success");
  });
  allPreviewPostion = [];
}

function rotateBoard(){
Board.classList.toggle('rotate')
}

function addListens() {
  const cells = document.querySelectorAll(".board>div>div");
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const [y, x] = e.target.getAttribute("data-pos").split(" ");
      if (!allPreviewPostion.length) {
        if (turn == e.target.getAttribute("data-team")) {
          let result = matrix[y][x].showMoves(matrix);
          currentHighlight = { x, y };
          allPreviewPostion = result;
          showPosition();
        }
        return;
      }

      // if already preview is present
      let isTrue = allPreviewPostion.find((ele) => ele.y == y && ele.x == x);
      if (isTrue) {
        matrix[currentHighlight.y][currentHighlight.x].move(isTrue);
        if (matrix[isTrue.y][isTrue.x]) {
          const killingEle = matrix[isTrue.y][isTrue.x];
          const img =
            Board.children[isTrue.y].children[isTrue.x].firstElementChild;
          Board.children[isTrue.y].children[isTrue.x].removeChild(img);
          addKilled(killingEle)

        }
        matrix[isTrue.y][isTrue.x] =
          matrix[currentHighlight.y][currentHighlight.x];
        matrix[currentHighlight.y][currentHighlight.x] = 0;
        turn = !turn;
        rotateBoard();
        draw();
        removeShowPosition();
        return;
      }

      removeShowPosition();
    });
  });

  console.log(cells);
}

addListens();


function addKilled(killingEle){
  
  const _kill = document.createElement('div');
  _kill.classList.add('killed');
  if(killingEle.type){
    _kill.innerHTML = `<img src="${killingEle.image}" style="filter: grayscale(1);" alt="">`;
    document.querySelector('.self>.killed-box').appendChild(_kill);
  } 
  else{
  _kill.innerHTML = `<img src="${killingEle.image}"  alt="">`;
    document.querySelector('.opponent>.killed-box').appendChild(_kill);
  }
  }
