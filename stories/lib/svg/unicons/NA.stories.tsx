import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { NA, NAPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/NA",
  component: NA,
} as ComponentMeta<typeof NA>;

const Template: ComponentStory<typeof NA> = (args: NAPropsI) => (
  <Box display="flex" gap="20px">
    <NA {...args} />
    <NA {...args} fill="red.500" />
    <NA {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
