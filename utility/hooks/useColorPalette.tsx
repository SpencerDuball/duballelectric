import { useEffect, useState } from "react";
import { useColor, SystemProps, FillProps } from "@xstyled/emotion";

// types
type FillType = FillProps["fill"];

// constants
const arbitraryColor = "black";

// helper functions
function undefinedElementArrayOfLength(length: number) {
  return Array.from(Array(length).map(() => undefined));
}

export interface UseColorPalettePropsI {
  colorPalette?: string[];
}

export const useColorPalette = (
  numberOfColors: number,
  props: SystemProps & UseColorPalettePropsI
) => {
  const [colorPalette, setColorPalette] = useState<FillType[]>(
    undefinedElementArrayOfLength(numberOfColors)
  );

  useEffect(() => {
    let tempColorPalette: FillType[] = undefinedElementArrayOfLength(
      numberOfColors
    );

    // if fill specified, replace all in tempColorPalette
    tempColorPalette = props.fill
      ? tempColorPalette.map((color) => props.fill!)
      : tempColorPalette;

    // if colors in colorPalette, replace in tempColorPalette
    if (props.colorPalette) {
      props.colorPalette.forEach((color, index) => {
        tempColorPalette[index] = color;
      });
    }

    setColorPalette(tempColorPalette);
  }, [props.colorPalette]);

  const themedColorPalette = colorPalette.map((color) => {
    // if the color is not undefined we will return the result
    // of the useColor hook
    if (color) return (useColor(color) as unknown) as string | undefined;
    // if the color is undefined, we still need to maintain the
    // same number of hook calls. So run the hook with an arbitrary
    // color, but return undefined.
    else {
      useColor(arbitraryColor);
      return undefined;
    }
  });

  return themedColorPalette;
};
