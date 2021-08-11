import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Volume, VolumePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Volume",
  component: Volume,
} as ComponentMeta<typeof Volume>;

const Template: ComponentStory<typeof Volume> = (args: VolumePropsI) => (
  <Box display="flex" gap="20px">
    <Volume {...args} />
    <Volume {...args} fill="red.500" />
    <Volume {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
