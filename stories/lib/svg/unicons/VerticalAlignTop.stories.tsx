import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VerticalAlignTop, VerticalAlignTopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VerticalAlignTop",
  component: VerticalAlignTop,
} as ComponentMeta<typeof VerticalAlignTop>;

const Template: ComponentStory<typeof VerticalAlignTop> = (
  args: VerticalAlignTopPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <VerticalAlignTop {...args} />
    <VerticalAlignTop {...args} fill="red.500" />
    <VerticalAlignTop {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
