import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CheckSquare, CheckSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CheckSquare",
  component: CheckSquare,
} as ComponentMeta<typeof CheckSquare>;

const Template: ComponentStory<typeof CheckSquare> = (
  args: CheckSquarePropsI
) => (
  <Box display="flex" gap="20px">
    <CheckSquare {...args} />
    <CheckSquare {...args} fill="red.500" />
    <CheckSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
