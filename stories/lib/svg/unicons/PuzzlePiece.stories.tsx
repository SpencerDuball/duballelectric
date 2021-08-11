import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PuzzlePiece, PuzzlePiecePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PuzzlePiece",
  component: PuzzlePiece,
} as ComponentMeta<typeof PuzzlePiece>;

const Template: ComponentStory<typeof PuzzlePiece> = (
  args: PuzzlePiecePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PuzzlePiece {...args} />
    <PuzzlePiece {...args} fill="red.500" />
    <PuzzlePiece {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
