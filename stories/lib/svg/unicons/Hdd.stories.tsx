import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Hdd, HddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Hdd",
  component: Hdd,
} as ComponentMeta<typeof Hdd>;

const Template: ComponentStory<typeof Hdd> = (args: HddPropsI) => (
  <Box display="flex" gap="20px">
    <Hdd {...args} />
    <Hdd {...args} fill="red.500" />
    <Hdd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
