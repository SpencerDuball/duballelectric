import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Backward, BackwardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Backward",
  component: Backward,
} as ComponentMeta<typeof Backward>;

const Template: ComponentStory<typeof Backward> = (args: BackwardPropsI) => (
  <Box display="flex" gap="20px">
    <Backward {...args} />
    <Backward {...args} fill="red.500" />
    <Backward {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
