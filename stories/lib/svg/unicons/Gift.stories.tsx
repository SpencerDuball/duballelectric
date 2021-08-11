import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Gift, GiftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Gift",
  component: Gift,
} as ComponentMeta<typeof Gift>;

const Template: ComponentStory<typeof Gift> = (args: GiftPropsI) => (
  <Box display="flex" gap="20px">
    <Gift {...args} />
    <Gift {...args} fill="red.500" />
    <Gift {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
