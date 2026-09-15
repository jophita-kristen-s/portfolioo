import React, { useState } from 'react';
import { Puzzle, Delete } from 'lucide-react';

const INITIAL_BOARD: (number | null)[][] = [
  [1, null, 3, null],
  [null, 4, null, 2],
  [2, null, 4, null],
  [null, 3, null, 1]
];

const SOLUTION: number[][] = [
  [1, 2, 3, 4],
  [3, 4, 1, 2],
  [2, 1, 4, 3],
  [4, 3, 2, 1]
];

export const SudokuSection: React.FC = () => {
  const [board, setBoard] = useState<(number | null)[][]>(INITIAL_BOARD.map(row => [...row]));
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>([0, 1]);
  const [feedback, setFeedback] = useState<{ type: 'neutral' | 'success' | 'error'; message: string }>({
    type: 'neutral',
    message: 'Select a cell and enter a number 1–4.'
  });

  const isInitialCell = (r: number, c: number) => {
    return INITIAL_BOARD[r][c] !== null;
  };

  const handleCellClick = (r: number, c: number) => {
    if (isInitialCell(r, c)) {
      setSelectedCell(null);
      setFeedback({ type: 'neutral', message: 'That is a locked clue cell.' });
      return;
    }
    setSelectedCell([r, c]);
    setFeedback({ type: 'neutral', message: `Cell [${r + 1}, ${c + 1}] selected. Choose a number.` });
  };

  const handleNumberInput = (num: number | null) => {
    if (!selectedCell) {
      setFeedback({ type: 'neutral', message: 'Click an empty cell first.' });
      return;
    }
    const [r, c] = selectedCell;
    if (isInitialCell(r, c)) return;

    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = num;
    setBoard(newBoard);

    // Auto-check if all cells filled
    let allFilled = true;
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (newBoard[row][col] === null) {
          allFilled = false;
          break;
        }
      }
    }

    if (allFilled) {
      checkSolutionWithBoard(newBoard);
    }
  };

  const checkSolutionWithBoard = (currentBoard: (number | null)[][]) => {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (currentBoard[r][c] !== SOLUTION[r][c]) {
          setFeedback({
            type: 'error',
            message: 'Not quite right yet. Keep thinking or inspect row/col conflicts!'
          });
          return;
        }
      }
    }
    setFeedback({
      type: 'success',
      message: '✦ Solved! Perfectly satisfied all constraints. Cognitive wiring sharp!'
    });
  };

  const handleCheck = () => {
    checkSolutionWithBoard(board);
  };

  const handleReset = () => {
    setBoard(INITIAL_BOARD.map(row => [...row]));
    setSelectedCell([0, 1]);
    setFeedback({ type: 'neutral', message: 'Puzzle reset to original clues.' });
  };

  const handleHint = () => {
    // Find first empty or incorrect cell
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (!isInitialCell(r, c) && board[r][c] !== SOLUTION[r][c]) {
          const newBoard = board.map(row => [...row]);
          newBoard[r][c] = SOLUTION[r][c];
          setBoard(newBoard);
          setSelectedCell([r, c]);
          setFeedback({
            type: 'neutral',
            message: `Hint added: Placed ${SOLUTION[r][c]} at [${r + 1}, ${c + 1}].`
          });
          return;
        }
      }
    }
    setFeedback({ type: 'success', message: 'All cells are already correctly filled!' });
  };

  return (
    <section
      id="sudoku"
      className="w-full px-4 md:px-8 lg:px-12 py-10 sm:py-12 bg-[#11121f] border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-5 sm:gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#282936] pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#66d9ca] text-xs font-semibold uppercase tracking-widest">
              <Puzzle className="w-4 h-4 text-[#66d9ca] shrink-0" aria-hidden="true" />
              <span>Mind Sharpener</span>
            </div>
            <h2 className="font-headline-sm text-2xl sm:text-3xl text-[#e2e1f3] mt-1 font-normal">
              Solve a Mini Sudoku?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#cbc3d5] max-w-md font-light">
            A 4x4 constraint-satisfaction puzzle. Each row, column, and 2x2 box must contain digits 1 through 4 exactly once.
          </p>
        </div>

        {/* Puzzle Interactive Console */}
        <div className="max-w-lg mx-auto w-full p-4 sm:p-5 rounded-xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl backdrop-blur-xl flex flex-col items-center gap-4">
          
          {/* Top instruction & Feedback pill */}
          <div
            className={`w-full text-center py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
              feedback.type === 'success'
                ? 'bg-[#66d9ca]/20 text-[#66d9ca] border border-[#66d9ca]/40'
                : feedback.type === 'error'
                ? 'bg-[#ffb1c3]/20 text-[#ffb1c3] border border-[#ffb1c3]/40'
                : 'bg-[#11121f] text-[#cbc3d5] border border-[#282936]'
            }`}
          >
            {feedback.message}
          </div>

          {/* 4x4 Grid Board */}
          <div className="grid grid-cols-4 gap-2 sm:gap-2.5 p-2 sm:p-3 rounded-xl bg-[#0c0d19] border border-[#333441] shadow-inner">
            {board.map((row, r) =>
              row.map((val, c) => {
                const isLocked = isInitialCell(r, c);
                const isSelected = selectedCell?.[0] === r && selectedCell?.[1] === c;
                
                // Border styling for 2x2 subgrid dividers
                const borderRight = c === 1 ? 'border-r-2 border-r-[#cfbdff]/40' : '';
                const borderBottom = r === 1 ? 'border-b-2 border-b-[#cfbdff]/40' : '';

                return (
                  <button
                    key={`${r}-${c}`}
                    type="button"
                    onClick={() => handleCellClick(r, c)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-title-editorial text-xl sm:text-2xl md:text-3xl font-semibold transition-all ${borderRight} ${borderBottom} ${
                      isLocked
                        ? 'bg-[#282936] text-[#cfbdff] cursor-not-allowed shadow-inner'
                        : isSelected
                        ? 'bg-[#9c7cf6] text-[#11121f] ring-2 ring-[#cfbdff] shadow-[0_0_12px_#9c7cf6]'
                        : val !== null
                        ? 'bg-[#191b27] text-[#66d9ca] hover:bg-[#282936]'
                        : 'bg-[#11121f] text-transparent hover:bg-[#1d1f2b]'
                    }`}
                  >
                    {val || ''}
                  </button>
                );
              })
            )}
          </div>

          {/* Touch Number Pad */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleNumberInput(num)}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#282936] hover:bg-[#373846] text-[#e2e1f3] hover:text-[#cfbdff] font-title-editorial text-xl font-semibold border border-[#333441] shadow-md transition-all active:scale-95 min-h-[44px] min-w-[44px]"
              >
                {num}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNumberInput(null)}
              title="Clear Cell"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#191b27] hover:bg-[#282936] text-[#ffb1c3] font-semibold text-xs border border-[#333441] flex items-center justify-center transition-all min-h-[44px] min-w-[44px] cursor-pointer"
            >
              <Delete className="w-5 h-5 shrink-0" aria-hidden="true" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full">
            <button
              type="button"
              onClick={handleCheck}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] text-sm font-semibold shadow-lg hover:shadow-[#9c7cf6]/30 transition-all min-h-[44px]"
            >
              Check Solution
            </button>
            <button
              type="button"
              onClick={handleHint}
              className="px-4 py-2.5 rounded-lg bg-[#282936] hover:bg-[#373846] text-[#cfbdff] text-sm font-medium border border-[#494553] transition-all min-h-[44px]"
            >
              Give Me a Hint
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 rounded-lg bg-[#191b27] hover:bg-[#282936] text-[#cbc3d5] text-sm font-medium border border-[#333441] transition-all min-h-[44px]"
            >
              Reset Clues
            </button>
          </div>

          <div className="text-center font-label-handwritten text-lg text-[#ffb1c3]">
            “Clear constraints breed clear code ♡”
          </div>
        </div>
      </div>
    </section>
  );
};
