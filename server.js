import app from "./app.js";
import Sudoku from "./index.js";

app.get("/",(req,res)=>{
    // res.send("Working Excellent")
    function generateSudokuBoard() {
        let N = 9;
        let K = 40;
        let sudoku = new Sudoku(N, K);
        sudoku.fillValues();
        return sudoku.getSudokuBoard();
      }
    let sudokuBoard = new generateSudokuBoard();
    let sudokuJSON = JSON.stringify(sudokuBoard);
    let sudokuObject = JSON.parse(sudokuJSON);
    res.status(201).send(sudokuObject);
})
app.listen(process.env.PORT,()=>{console.log(`Listening on port http://${process.env.PORT}`)})