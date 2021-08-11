import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Illustration, IllustrationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Illustration",
  component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (
  args: IllustrationPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Illustration {...args} />
    <Illustration {...args} fill="red.500" />
    <Illustration {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
