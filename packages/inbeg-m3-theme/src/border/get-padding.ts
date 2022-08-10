type Padding = { top: string; right: string; bottom: string; left: string };
export const getPadding = (padding?: string): Padding => {
  const gutter = padding || "0px";
  const pad = gutter.split(" ");
  switch (pad.length) {
    case 1:
      return {
        bottom: gutter,
        left: gutter,
        right: gutter,
        top: gutter,
      };
    case 2:
      return {
        bottom: pad[0],
        left: pad[1],
        right: pad[1],
        top: pad[0],
      };
    case 4:
      return {
        bottom: pad[2],
        left: pad[3],
        right: pad[1],
        top: pad[0],
      };
    default: {
      console.error(`Invalid gutter: ${gutter}, falling back to 0`);
      return {
        bottom: "0rem",
        left: "0rem",
        right: "0rem",
        top: "0rem",
      };
    }
  }
};
