import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SmileSquintWink, SmileSquintWinkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SmileSquintWink",
  component: SmileSquintWink,
} as ComponentMeta<typeof SmileSquintWink>;

const Template: ComponentStory<typeof SmileSquintWink> = (
  args: SmileSquintWinkPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SmileSquintWink {...args} />
    <SmileSquintWink {...args} fill="red.500" />
    <SmileSquintWink {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
