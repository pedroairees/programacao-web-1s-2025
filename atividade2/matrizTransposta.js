function transporMatriz(A) {
    console.log("Matriz Original: ");
    console.log(A.map(row => row.join(" ")).join("\n"));

    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));

    console.log("\nMatriz transposta: ");
    console.log(transposta.map(row => row.join(" ")).join("\n"));
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
transporMatriz(matriz);