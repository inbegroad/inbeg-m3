export type Padding = {
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
};
export const getPadding = (padding?: string): Padding => {
  const gutter = padding || "0px";
  const pad = gutter.split(" ");
  switch (pad.length) {
    case 1:
      return {
        paddingBottom: gutter,
        paddingLeft: gutter,
        paddingRight: gutter,
        paddingTop: gutter,
      };
    case 2:
      return {
        paddingBottom: pad[0],
        paddingLeft: pad[1],
        paddingRight: pad[1],
        paddingTop: pad[0],
      };
    case 4:
      return {
        paddingBottom: pad[2],
        paddingLeft: pad[3],
        paddingRight: pad[1],
        paddingTop: pad[0],
      };
    default: {
      console.error(`Invalid gutter: ${gutter}, falling back to 0`);
      return {
        paddingBottom: "0rem",
        paddingLeft: "0rem",
        paddingRight: "0rem",
        paddingTop: "0rem",
      };
    }
  }
};
