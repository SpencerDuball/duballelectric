import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BoxIcon, BoxIconPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Box",
  component: BoxIcon,
} as ComponentMeta<typeof BoxIcon>;

const Template: ComponentStory<typeof BoxIcon> = (args: BoxIconPropsI) => (
  <Box display="flex" gap="20px">
    <BoxIcon {...args} />
    <BoxIcon {...args} fill="red.500" />
    <BoxIcon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
