import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SanitizerAlt, SanitizerAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SanitizerAlt",
  component: SanitizerAlt,
} as ComponentMeta<typeof SanitizerAlt>;

const Template: ComponentStory<typeof SanitizerAlt> = (
  args: SanitizerAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SanitizerAlt {...args} />
    <SanitizerAlt {...args} fill="red.500" />
    <SanitizerAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
