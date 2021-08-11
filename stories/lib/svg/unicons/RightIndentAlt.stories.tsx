import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { RightIndentAlt, RightIndentAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RightIndentAlt",
  component: RightIndentAlt,
} as ComponentMeta<typeof RightIndentAlt>;

const Template: ComponentStory<typeof RightIndentAlt> = (
  args: RightIndentAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <RightIndentAlt {...args} />
    <RightIndentAlt {...args} fill="red.500" />
    <RightIndentAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
