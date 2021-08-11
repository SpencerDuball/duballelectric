import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BorderClear, BorderClearPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderClear",
  component: BorderClear,
} as ComponentMeta<typeof BorderClear>;

const Template: ComponentStory<typeof BorderClear> = (
  args: BorderClearPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BorderClear {...args} />
    <BorderClear {...args} fill="red.500" />
    <BorderClear {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
