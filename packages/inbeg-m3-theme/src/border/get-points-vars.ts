type GetPointsVars = { shapeSize: number; fontSize: number };

export const getPointsVars = ({ fontSize, shapeSize }: GetPointsVars) => ({
  1: `${shapeSize / fontSize}rem 0%`,
  2: `calc(100% - ${shapeSize / fontSize}rem) 0%`,
  3: `100% ${shapeSize / fontSize}rem`,
  4: `100% calc(100% - ${shapeSize / fontSize}rem)`,
  5: `calc(100% - ${shapeSize / fontSize}rem) 100%`,
  6: `${shapeSize / fontSize}rem 100%`,
  7: `0% calc(100% - ${shapeSize / fontSize}rem)`,
  8: `0% ${shapeSize / fontSize}rem`,
});
