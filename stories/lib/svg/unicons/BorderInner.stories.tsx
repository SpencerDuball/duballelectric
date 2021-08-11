import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BorderInner, BorderInnerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderInner",
  component: BorderInner,
} as ComponentMeta<typeof BorderInner>;

const Template: ComponentStory<typeof BorderInner> = (
  args: BorderInnerPropsI
) => (
  <Box display="flex" gap="20px">
    <BorderInner {...args} />
    <BorderInner {...args} fill="red.500" />
    <BorderInner {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
