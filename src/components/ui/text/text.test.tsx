import { render, screen } from "@testing-library/react";
import React from "react";
import { it } from "vitest";
import Text from "./text";
import { textTheme, outline, solid } from "./text.styles";
import { TEXT_TEST_ID } from "./text.constants";

describe(`Text`, () => {
  const TEXT = `submit`;

  it(`should render children as label of the button`, () => {
    render(<Text>{TEXT}</Text>);
    const text = screen.getByTestId(TEXT_TEST_ID);

    expect(text.textContent).toBe(TEXT);
    expect.hasAssertions();
  });

  it(`should have a solid variant`, () => {
    expect(solid).toBeDefined();
    expect(solid).toEqual(
      expect.objectContaining({
        _hover: expect.any(Object),
        _focus: expect.any(Object),
      }),
    );
    expect.hasAssertions();
  });

  it(`should have a outline variant`, () => {
    expect(outline).toBeDefined();
    expect(outline).toEqual(
      expect.objectContaining({
        _hover: expect.any(Object),
        _focus: expect.any(Object),
      }),
    );
    expect.hasAssertions();
  });

  it(`should have a textTheme with outline and solid variants`, () => {
    expect(textTheme).toBeDefined();
    expect(textTheme).toEqual(
      expect.objectContaining({
        variants: { solid, outline },
      }),
    );
    expect.hasAssertions();
  });
});
