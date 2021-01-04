import { useEffect, useState } from "react";
import Head from "next/head";
import { CHESS } from "../constants/chess";

export default function Home() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    PGNV.pgnView("board", {
      pgn: CHESS[selected].pgn,
      pieceStyle: "merida",
    });
  }, []);

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <Head>
        <script src="pgn.js" type="text/javascript"></script>
      </Head>
      {CHESS.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setSelected(index);
              PGNV.pgnView("board", {
                pgn: CHESS[index].pgn,
                pieceStyle: "merida",
              });
            }}
          >
            {item.label}
          </div>
        );
      })}
      <h2>{CHESS[selected].label}</h2>
      {CHESS[selected].notes ? (
        <p
          dangerouslySetInnerHTML={{
            __html: CHESS[selected].notes,
          }}
        ></p>
      ) : null}
      <div id="board"></div>
    </div>
  );
}
