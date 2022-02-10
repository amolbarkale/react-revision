import { useState } from "react";

export const RecursiveDropdown = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <>
        <span onClick={() => setExpand(!expand)}>
          {explorer.name}
          <br />
        </span>
        <div
          style={{
            cursor: "pointer",
            paddingLeft: "15px",
            display: expand ? "block" : "none",
          }}
        >
          {explorer.items.map((itm) => (
            <RecursiveDropdown explorer={itm} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <span>
        {explorer.name} <br />
      </span>
    );
  }
};
