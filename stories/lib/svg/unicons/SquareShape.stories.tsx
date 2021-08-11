import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SquareShape, SquareShapePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SquareShape",
  component: SquareShape,
} as ComponentMeta<typeof SquareShape>;

const Template: ComponentStory<typeof SquareShape> = (
  args: SquareShapePropsI
) => (
  <Box display="flex" gap="20px">
    <SquareShape {...args} />
    <SquareShape {...args} fill="red.500" />
    <SquareShape {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
