import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SkypeAlt, SkypeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SkypeAlt",
  component: SkypeAlt,
} as ComponentMeta<typeof SkypeAlt>;

const Template: ComponentStory<typeof SkypeAlt> = (args: SkypeAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <SkypeAlt {...args} />
    <SkypeAlt {...args} fill="red.500" />
    <SkypeAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
