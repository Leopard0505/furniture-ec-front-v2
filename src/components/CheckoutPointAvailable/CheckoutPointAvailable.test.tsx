import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../test/utils/renderWithRouter";
import { CheckoutPointAvailable } from "./CheckoutPointAvailable";

describe("CheckoutPointAvailable", () => {
  it("renders the section title and available points", () => {
    renderWithRouter(<CheckoutPointAvailable />);

    // Check if the section title is rendered
    expect(screen.getByText("ご利用可能なポイント")).toBeInTheDocument();

    // Check if the available points are displayed
    expect(screen.getByText("利用可能ポイント 1,200pt")).toBeInTheDocument();
  });

  it("renders radio options and handles selection", () => {
    renderWithRouter(<CheckoutPointAvailable />);

    // Check if all radio options are rendered
    expect(screen.getByLabelText("利用しない")).toBeInTheDocument();
    expect(screen.getByLabelText("すべて利用する")).toBeInTheDocument();
    expect(screen.getByLabelText("一部のみ利用する")).toBeInTheDocument();

    // Select "一部のみ利用する" option
    fireEvent.click(screen.getByLabelText("一部のみ利用する"));
    expect(screen.getByLabelText("一部のみ利用する")).toBeChecked();
  });

  it("enables input field only when '一部のみ利用する' is selected", () => {
    renderWithRouter(<CheckoutPointAvailable />);

    const inputField = screen.getByPlaceholderText("0");

    // Initially, the input field should be disabled
    expect(inputField).toBeDisabled();

    // Select "一部のみ利用する" option
    fireEvent.click(screen.getByLabelText("一部のみ利用する"));
    expect(inputField).not.toBeDisabled();
  });

  it("validates point input and displays errors", () => {
    renderWithRouter(<CheckoutPointAvailable />);

    // Select "一部のみ利用する" option
    fireEvent.click(screen.getByLabelText("一部のみ利用する"));

    const inputField = screen.getByPlaceholderText("0");

    // Enter an invalid point value
    fireEvent.change(inputField, { target: { value: "2000" } }); // Exceeds available points
    expect(screen.getByText("利用可能ポイントを超えています。")).toBeInTheDocument(); // Assuming this is the error message

    // Enter a valid point value
    fireEvent.change(inputField, { target: { value: "1000" } });
    expect(screen.queryByText("利用可能ポイントを超えています")).not.toBeInTheDocument();
  });
});
