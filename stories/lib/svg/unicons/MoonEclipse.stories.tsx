import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoonEclipse, MoonEclipsePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoonEclipse",
  component: MoonEclipse,
} as ComponentMeta<typeof MoonEclipse>;

const Template: ComponentStory<typeof MoonEclipse> = (
  args: MoonEclipsePropsI
) => (
  <Box display="flex" gap="20px">
    <MoonEclipse {...args} />
    <MoonEclipse {...args} fill="red.500" />
    <MoonEclipse {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
