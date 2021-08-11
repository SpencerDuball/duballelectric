import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GlassMartini, GlassMartiniPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GlassMartini",
  component: GlassMartini,
} as ComponentMeta<typeof GlassMartini>;

const Template: ComponentStory<typeof GlassMartini> = (
  args: GlassMartiniPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <GlassMartini {...args} />
    <GlassMartini {...args} fill="red.500" />
    <GlassMartini {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
