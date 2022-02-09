// import "../App.css";

export const Chess = () => {
  const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const vertical = ["1", "2", "3", "4", "5", "6", "7", "8"];

  let arr = [];

  for (let i = 0; i < horizontal.length; i++) {
    for (let j = 0; j < vertical.length; j++) {
      let num = i + j + 2;

      if (num % 2 === 0) {
        arr.push(
          <div className="block greenn">
            {horizontal[i]}
            {vertical[j]}
          </div>
        );
      } else {
        arr.push(
          <div className="block whitee">
            {horizontal[i]}
            {vertical[j]}
          </div>
        );
      }
    }
  }

  return (
    <div className="body">
      <div id="chessboard">{arr}</div>
    </div>
  );
};
