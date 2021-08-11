import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VkAlt, VkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VkAlt",
  component: VkAlt,
} as ComponentMeta<typeof VkAlt>;

const Template: ComponentStory<typeof VkAlt> = (args: VkAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <VkAlt {...args} />
    <VkAlt {...args} fill="red.500" />
    <VkAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
