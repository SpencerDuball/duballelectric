import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VolumeDown, VolumeDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VolumeDown",
  component: VolumeDown,
} as ComponentMeta<typeof VolumeDown>;

const Template: ComponentStory<typeof VolumeDown> = (
  args: VolumeDownPropsI
) => (
  <Box display="flex" gap="20px">
    <VolumeDown {...args} />
    <VolumeDown {...args} fill="red.500" />
    <VolumeDown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
