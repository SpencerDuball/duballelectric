import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PuzzlePiece, PuzzlePiecePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PuzzlePiece",
  component: PuzzlePiece,
} as ComponentMeta<typeof PuzzlePiece>;

const Template: ComponentStory<typeof PuzzlePiece> = (
  args: PuzzlePiecePropsI
) => (
  <x.div display="flex" gap="20px">
    <PuzzlePiece {...args} />
    <PuzzlePiece {...args} fill="red.500" />
    <PuzzlePiece {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
