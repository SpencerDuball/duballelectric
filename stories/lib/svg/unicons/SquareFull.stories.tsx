import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SquareFull, SquareFullPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SquareFull",
  component: SquareFull,
} as ComponentMeta<typeof SquareFull>;

const Template: ComponentStory<typeof SquareFull> = (
  args: SquareFullPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SquareFull {...args} />
    <SquareFull {...args} fill="red.500" />
    <SquareFull {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
