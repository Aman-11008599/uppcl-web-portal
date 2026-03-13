"use client";

import { useEffect } from "react";

export default function AccessibilityControls() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const changeFontSize = (type: "increase" | "decrease" | "reset") => {
    const html = document.documentElement;
    const currentSize = parseFloat(
      window.getComputedStyle(html).fontSize
    );

    if (type === "increase") html.style.fontSize = currentSize + 1 + "px";
    if (type === "decrease") html.style.fontSize = currentSize - 1 + "px";
    if (type === "reset") html.style.fontSize = "16px";
  };

  const setTheme = (theme: "light" | "dark") => {
    const body = document.body;
    theme === "dark"
      ? body.classList.add("dark-theme")
      : body.classList.remove("dark-theme");
  };

  return (
    <ul className="dropdown-menu text-center">
      <li>
        <button
          className="dropdown-item text-danger"
          onClick={() => changeFontSize("decrease")}
        >
          A-
        </button>
      </li>

      <li>
        <button
          className="dropdown-item text-danger"
          onClick={() => changeFontSize("reset")}
        >
          A
        </button>
      </li>

      <li>
        <button
          className="dropdown-item text-danger"
          onClick={() => changeFontSize("increase")}
        >
          A+
        </button>
      </li>

      <li><hr className="dropdown-divider" /></li>

      <li>
        <button className="dropdown-item" onClick={() => setTheme("light")}>
          T
        </button>
      </li>

      <li>
        <button
          className="dropdown-item bg-dark text-white"
          onClick={() => setTheme("dark")}
        >
          T
        </button>
      </li>
    </ul>
  );
}
