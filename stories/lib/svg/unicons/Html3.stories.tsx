import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Html3, Html3PropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Html3",
  component: Html3,
} as ComponentMeta<typeof Html3>;

const Template: ComponentStory<typeof Html3> = (args: Html3PropsI) => (
  <Box display="flex" gap="20px">
    <Html3 {...args} />
    <Html3 {...args} fill="red.500" />
    <Html3 {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
