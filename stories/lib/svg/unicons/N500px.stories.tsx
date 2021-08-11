import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { N500px, N500pxPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N500px",
  component: N500px,
} as ComponentMeta<typeof N500px>;

const Template: ComponentStory<typeof N500px> = (args: N500pxPropsI) => (
  <Box display="flex" gap="20px">
    <N500px {...args} />
    <N500px {...args} fill="red.500" />
    <N500px {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
