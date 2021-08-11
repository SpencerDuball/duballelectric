import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GlassTea, GlassTeaPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GlassTea",
  component: GlassTea,
} as ComponentMeta<typeof GlassTea>;

const Template: ComponentStory<typeof GlassTea> = (args: GlassTeaPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <GlassTea {...args} />
    <GlassTea {...args} fill="red.500" />
    <GlassTea {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
