import { useState, useLayoutEffect } from "react";

export const App = () => {
  const [theme, setTheme] = useState("light");

  const lightPoem = `
  In realms where light does softly tread,
  A gentle glow where we are led.
  Sunbeams dance with joy so free,
  In a world of warmth, we find our glee.
  Fields of gold under the azure sky,
  In the light, our spirits ever high.
  A canvas painted in hues so bright,
  We find our peace in this splendid light.
`;

  const darkPoem = `
  In the quietude of the shadow’s grace,
  Mysteries cloak the silent space.
  Moonlight whispers to the tranquil sea,
  In the dark, our souls dare to be.
  Stars twinkle in the velvet night,
  Guiding us with their gentle light.
  A universe veiled in enigmatic art,
  We explore the depths of our own heart.
`;

  useLayoutEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }


  return (
    <div className="App">
      Hello Coders!
      {theme === "light" ? (
        <div>
          <h4>Light Poem</h4>
          <p>{lightPoem}</p>
        </div>
      ) : (
        <div>
          <h4>Dark Poem</h4>
          <p>{darkPoem}</p>
        </div>
      )}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
