import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Boombox, BoomboxPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Boombox",
  component: Boombox,
} as ComponentMeta<typeof Boombox>;

const Template: ComponentStory<typeof Boombox> = (args: BoomboxPropsI) => (
  <Box display="flex" gap="20px">
    <Boombox {...args} />
    <Boombox {...args} fill="red.500" />
    <Boombox {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
