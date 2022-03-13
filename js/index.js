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

const matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [Pawn1, Pawn2, Pawn3, Pawn4, Pawn5, Pawn6, Pawn7, Pawn8],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function draw() {
  matrix.forEach((row, y) => {
    row.forEach((col, x) => {
      Board.children[y].children[x].setAttribute("data-pos", `${y} ${x}`);
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
        Board.children[col.position.y].children[col.position.x].appendChild(
          insertImage(matrix[col.position.y][col.position.x].image)
        );
      } else {
        const img = Board.children[y].children[x].firstElementChild;
        if (!img) return;
        Board.children[y].children[x].removeChild(img);
      }
    });
  });
}

draw();

function insertImage(url) {
  const image = document.createElement("img");
  image.src = url;
  image.style.pointerEvents = "none";
  return image;
}

let allPreviewPostion = [];
let currentHighlight = null;

function showPosition() {
  allPreviewPostion.forEach((pos) => {
    Board.children[pos.y].children[pos.x].classList.add("success");
    // Board.children[pos.y].children[pos.x].focus();
  });
}

function removeShowPosition() {
  allPreviewPostion.forEach((item) => {
    Board.children[item.y].children[item.x].classList.remove("success");
  });
  allPreviewPostion = [];
}

function addListens() {
  const cells = document.querySelectorAll(".board>div>div");
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const [y, x] = e.target.getAttribute("data-pos").split(" ");
      if (!allPreviewPostion.length) {
        removeShowPosition();
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
        // removeShowPosition();
        matrix[currentHighlight.y][currentHighlight.x].move(isTrue);
        console.log(isTrue, currentHighlight);
        matrix[isTrue.y][isTrue.x] =
          matrix[currentHighlight.y][currentHighlight.x];
        matrix[currentHighlight.y][currentHighlight.x] = 0;
        draw();
        return;
      }
    });
  });

  console.log(cells);
}

addListens();
