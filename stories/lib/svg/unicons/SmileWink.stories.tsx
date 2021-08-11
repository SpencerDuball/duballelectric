import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SmileWink, SmileWinkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SmileWink",
  component: SmileWink,
} as ComponentMeta<typeof SmileWink>;

const Template: ComponentStory<typeof SmileWink> = (args: SmileWinkPropsI) => (
  <Box display="flex" gap="20px">
    <SmileWink {...args} />
    <SmileWink {...args} fill="red.500" />
    <SmileWink {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
