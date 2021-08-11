import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DialpadAlt, DialpadAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DialpadAlt",
  component: DialpadAlt,
} as ComponentMeta<typeof DialpadAlt>;

const Template: ComponentStory<typeof DialpadAlt> = (
  args: DialpadAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <DialpadAlt {...args} />
    <DialpadAlt {...args} fill="red.500" />
    <DialpadAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
