import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ReactLogo, ReactLogoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ReactLogo",
  component: ReactLogo,
} as ComponentMeta<typeof ReactLogo>;

const Template: ComponentStory<typeof ReactLogo> = (args: ReactLogoPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ReactLogo {...args} />
    <ReactLogo {...args} fill="red.500" />
    <ReactLogo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
