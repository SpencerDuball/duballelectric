import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MinusSquare, MinusSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MinusSquare",
  component: MinusSquare,
} as ComponentMeta<typeof MinusSquare>;

const Template: ComponentStory<typeof MinusSquare> = (
  args: MinusSquarePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MinusSquare {...args} />
    <MinusSquare {...args} fill="red.500" />
    <MinusSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
