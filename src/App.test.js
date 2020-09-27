import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("log key codes", () => {
  const handleKeyUp = (event) => {
    console.log({ key: event.key, keyCode: event.keyCode });
  };
  render(<input type="text" onKeyUp={handleKeyUp} />);

  const input = screen.getByRole("textbox");
  userEvent.type(input, ".");
  userEvent.type(input, "{del}");
});
