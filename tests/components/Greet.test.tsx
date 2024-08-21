import Greet from "../../src/components/Greet";
import { render, screen } from "@testing-library/react";
describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Mosh" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/mosh/i);
  });

  it("should render logic button when name is not provided", () => {
    render(<Greet name="" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
