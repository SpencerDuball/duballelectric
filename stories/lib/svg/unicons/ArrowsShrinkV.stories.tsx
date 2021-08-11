import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsShrinkV, ArrowsShrinkVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsShrinkV",
  component: ArrowsShrinkV,
} as ComponentMeta<typeof ArrowsShrinkV>;

const Template: ComponentStory<typeof ArrowsShrinkV> = (
  args: ArrowsShrinkVPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowsShrinkV {...args} />
    <ArrowsShrinkV {...args} fill="red.500" />
    <ArrowsShrinkV {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
