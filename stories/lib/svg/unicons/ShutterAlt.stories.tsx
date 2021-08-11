import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShutterAlt, ShutterAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShutterAlt",
  component: ShutterAlt,
} as ComponentMeta<typeof ShutterAlt>;

const Template: ComponentStory<typeof ShutterAlt> = (
  args: ShutterAltPropsI
) => (
  <Box display="flex" gap="20px">
    <ShutterAlt {...args} />
    <ShutterAlt {...args} fill="red.500" />
    <ShutterAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
