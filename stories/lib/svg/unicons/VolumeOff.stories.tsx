import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VolumeOff, VolumeOffPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VolumeOff",
  component: VolumeOff,
} as ComponentMeta<typeof VolumeOff>;

const Template: ComponentStory<typeof VolumeOff> = (args: VolumeOffPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <VolumeOff {...args} />
    <VolumeOff {...args} fill="red.500" />
    <VolumeOff {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
