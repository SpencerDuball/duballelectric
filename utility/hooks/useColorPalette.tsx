import { useEffect, useState } from "react";
import { useToken, SystemProps, ColorProps } from "@chakra-ui/react";

// types
type FillType = ColorProps["fill"];

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
    if (color) return useToken("colors", [color as string]);
    // if the color is undefined, we still need to maintain the
    // same number of hook calls. So run the hook with an arbitrary
    // color, but return undefined.
    else {
      useToken("colors", [color as string]);
      return undefined;
    }
  });

  return themedColorPalette;
};
