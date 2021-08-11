import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Dribbble, DribbblePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Dribbble",
  component: Dribbble,
} as ComponentMeta<typeof Dribbble>;

const Template: ComponentStory<typeof Dribbble> = (args: DribbblePropsI) => (
  <Box display="flex" gap="20px">
    <Dribbble {...args} />
    <Dribbble {...args} fill="red.500" />
    <Dribbble {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
