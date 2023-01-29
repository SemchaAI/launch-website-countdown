import React from "react";

export const Newline = ({ n = 1 }) =>
  new Array(n).fill(null).map((_, i) => <br key={i} />);
