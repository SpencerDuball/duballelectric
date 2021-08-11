import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Enter, EnterPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Enter",
  component: Enter,
} as ComponentMeta<typeof Enter>;

const Template: ComponentStory<typeof Enter> = (args: EnterPropsI) => (
  <Box display="flex" gap="20px">
    <Enter {...args} />
    <Enter {...args} fill="red.500" />
    <Enter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
