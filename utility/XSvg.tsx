import { x, SystemProps } from "@xstyled/emotion";
import React from "react";

// fix for <x.svg> type conflicts
type XSvgKeys = keyof Omit<SystemProps, "children">;
type UniqueIntrinsicSvgProps = Omit<React.SVGProps<SVGSVGElement>, XSvgKeys>;
export interface XSvgProps extends UniqueIntrinsicSvgProps, SystemProps {}
export const XSvg: (props: XSvgProps) => JSX.Element = x.svg as any;
