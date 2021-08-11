import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SkipForward, SkipForwardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SkipForward",
  component: SkipForward,
} as ComponentMeta<typeof SkipForward>;

const Template: ComponentStory<typeof SkipForward> = (
  args: SkipForwardPropsI
) => (
  <Box display="flex" gap="20px">
    <SkipForward {...args} />
    <SkipForward {...args} fill="red.500" />
    <SkipForward {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
