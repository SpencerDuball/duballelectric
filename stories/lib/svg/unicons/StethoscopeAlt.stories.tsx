import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { StethoscopeAlt, StethoscopeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StethoscopeAlt",
  component: StethoscopeAlt,
} as ComponentMeta<typeof StethoscopeAlt>;

const Template: ComponentStory<typeof StethoscopeAlt> = (
  args: StethoscopeAltPropsI
) => (
  <Box display="flex" gap="20px">
    <StethoscopeAlt {...args} />
    <StethoscopeAlt {...args} fill="red.500" />
    <StethoscopeAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
