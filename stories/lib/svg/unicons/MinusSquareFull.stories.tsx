import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MinusSquareFull, MinusSquareFullPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MinusSquareFull",
  component: MinusSquareFull,
} as ComponentMeta<typeof MinusSquareFull>;

const Template: ComponentStory<typeof MinusSquareFull> = (
  args: MinusSquareFullPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MinusSquareFull {...args} />
    <MinusSquareFull {...args} fill="red.500" />
    <MinusSquareFull {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
