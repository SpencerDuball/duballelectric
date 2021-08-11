import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Microscope, MicroscopePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Microscope",
  component: Microscope,
} as ComponentMeta<typeof Microscope>;

const Template: ComponentStory<typeof Microscope> = (
  args: MicroscopePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Microscope {...args} />
    <Microscope {...args} fill="red.500" />
    <Microscope {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
