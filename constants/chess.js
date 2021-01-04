export const CHESS = [
  {
    label: `Ruy Lopez Open`,
    pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6
    5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6`,
    notes: `<h3>c3</h3>
    <p>Bc5 is good for black</p>
    
    <h3>Be3</h3>
    <p>
      Bc5 is bad for black - exchange bishops<br />
      Ka5 is bad for black - Kd4<br />
      Be2 makes things balanced 
    </p>
    
    <h3>Kd2</h3>
    
    <p></p>`,
  },
  {
    label: "Queen's Gambit Declined (Alatortsev)",
    pgn: "1. d4 d5 2. c4 e6 3. Nc3 Be7",
    notes: "Delay Kf6, which can be pinned by the bishop",
  },
  {
    label: "Queen's Gambit Declined (Tarrasch)",
    pgn:
      "1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nf4",
    notes: "Black has isolated queen's pawn in exchange for piece activity",
  },
  {
    label: "Queen's Gambit Declined (Exchange)",
    pgn: "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 Be7 6. e3 c6 7. Bd3",
    notes: `Black's bishop isn't helpful<br />
    Attack queen-side pawn structure`,
  },
  {
    label: "Queen's Gambit Declined (Classical)",
    pgn: "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3",
    notes: `Black's bishop isn't helpful<br />
    Attack queen-side pawn structure`,
  },
];
