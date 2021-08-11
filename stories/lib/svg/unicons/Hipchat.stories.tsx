import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Hipchat, HipchatPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Hipchat",
  component: Hipchat,
} as ComponentMeta<typeof Hipchat>;

const Template: ComponentStory<typeof Hipchat> = (args: HipchatPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Hipchat {...args} />
    <Hipchat {...args} fill="red.500" />
    <Hipchat {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
