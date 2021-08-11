import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PhoneVolume, PhoneVolumePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PhoneVolume",
  component: PhoneVolume,
} as ComponentMeta<typeof PhoneVolume>;

const Template: ComponentStory<typeof PhoneVolume> = (
  args: PhoneVolumePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PhoneVolume {...args} />
    <PhoneVolume {...args} fill="red.500" />
    <PhoneVolume {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
