import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Focus, FocusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Focus",
  component: Focus,
} as ComponentMeta<typeof Focus>;

const Template: ComponentStory<typeof Focus> = (args: FocusPropsI) => (
  <Box display="flex" gap="20px">
    <Focus {...args} />
    <Focus {...args} fill="red.500" />
    <Focus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
