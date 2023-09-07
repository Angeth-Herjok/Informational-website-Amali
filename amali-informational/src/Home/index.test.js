import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HomePage from "./index";

let container = null;

beforeEach(() => {
  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("HomePage", () => {
  it("changes background image after a certain interval", () => {
    jest.useFakeTimers();

    
    act(() => {
      render(<HomePage />, container);
    });

    
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    
    const backgroundElement = container.querySelector(".background");
    const backgroundImage = window.getComputedStyle(backgroundElement).getPropertyValue("background-image");
    expect(backgroundImage).toContain("kiprop.png");

    
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    
    const newBackgroundImage = window.getComputedStyle(backgroundElement).getPropertyValue("background-image");
    expect(newBackgroundImage).toContain("eliudkipchoge.jpg");

    
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    
    const finalBackgroundImage = window.getComputedStyle(backgroundElement).getPropertyValue("background-image");
    expect(finalBackgroundImage).toContain("chepngetich.png");

    
    act(() => {
      jest.clearAllTimers();
    });
  });
});