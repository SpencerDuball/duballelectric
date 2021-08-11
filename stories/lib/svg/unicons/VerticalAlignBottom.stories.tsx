import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  VerticalAlignBottom,
  VerticalAlignBottomPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VerticalAlignBottom",
  component: VerticalAlignBottom,
} as ComponentMeta<typeof VerticalAlignBottom>;

const Template: ComponentStory<typeof VerticalAlignBottom> = (
  args: VerticalAlignBottomPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <VerticalAlignBottom {...args} />
    <VerticalAlignBottom {...args} fill="red.500" />
    <VerticalAlignBottom {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
