import React from "react";

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

const Color = (WrappedComponent) => {
  let colorRandom = getRandomColor();
  return (props) => (
    <div style={{ color: colorRandom }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Color;
