import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignAlt, AlignAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignAlt",
  component: AlignAlt,
} as ComponentMeta<typeof AlignAlt>;

const Template: ComponentStory<typeof AlignAlt> = (args: AlignAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <AlignAlt {...args} />
    <AlignAlt {...args} fill="red.500" />
    <AlignAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
