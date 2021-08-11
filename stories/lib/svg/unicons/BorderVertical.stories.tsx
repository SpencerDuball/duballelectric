import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BorderVertical, BorderVerticalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderVertical",
  component: BorderVertical,
} as ComponentMeta<typeof BorderVertical>;

const Template: ComponentStory<typeof BorderVertical> = (
  args: BorderVerticalPropsI
) => (
  <Box display="flex" gap="20px">
    <BorderVertical {...args} />
    <BorderVertical {...args} fill="red.500" />
    <BorderVertical {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
