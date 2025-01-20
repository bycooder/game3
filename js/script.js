let score = 0;
const display = document.querySelector("#score");

const elementsMap = {
    1: [".e", ".p", ".s", ".e1", ".n1", ".f1"],
    2: [".c", ".l", ".q", ".t", ".k1", ".o1"],
    3: [".a", ".k", ".r", ".d1", ".e1", ".s1"],
    4: [".d", ".m", ".x", ".a1", ".m1"],
    5: [".f", ".i", ".y", ".c1", ".i1", ".m1", ".j1"],
    6: [".j", ".z", ".g1", ".r1"],
    7: [".h", ".o", ".u", ".q1"],
    8: [".b", ".n", ".g", ".v", ".h1"],
    9: [".u1", ".t1", ".b1", ".l1", ".p1"],
};

function numbers(input) {
    input = Number(input);

    if (elementsMap[input]) {
        elementsMap[input].forEach((selector) => {
            const element = document.querySelector(selector);
            element.onclick = () => {
                element.innerHTML = `${input}`;
                score += 10;
                updateScore();
            };
        });
    }
}

function updateScore() {
    display.innerHTML = `point: ${score}`;
}
