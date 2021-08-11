import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExpandLeft, ExpandLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExpandLeft",
  component: ExpandLeft,
} as ComponentMeta<typeof ExpandLeft>;

const Template: ComponentStory<typeof ExpandLeft> = (
  args: ExpandLeftPropsI
) => (
  <Box display="flex" gap="20px">
    <ExpandLeft {...args} />
    <ExpandLeft {...args} fill="red.500" />
    <ExpandLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
