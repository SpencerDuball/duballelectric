import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MobileVibrate, MobileVibratePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MobileVibrate",
  component: MobileVibrate,
} as ComponentMeta<typeof MobileVibrate>;

const Template: ComponentStory<typeof MobileVibrate> = (
  args: MobileVibratePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MobileVibrate {...args} />
    <MobileVibrate {...args} fill="red.500" />
    <MobileVibrate {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
