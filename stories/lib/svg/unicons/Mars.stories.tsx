import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Mars, MarsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Mars",
  component: Mars,
} as ComponentMeta<typeof Mars>;

const Template: ComponentStory<typeof Mars> = (args: MarsPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Mars {...args} />
    <Mars {...args} fill="red.500" />
    <Mars {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
