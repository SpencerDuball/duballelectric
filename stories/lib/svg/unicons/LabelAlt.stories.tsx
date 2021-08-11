import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LabelAlt, LabelAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LabelAlt",
  component: LabelAlt,
} as ComponentMeta<typeof LabelAlt>;

const Template: ComponentStory<typeof LabelAlt> = (args: LabelAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <LabelAlt {...args} />
    <LabelAlt {...args} fill="red.500" />
    <LabelAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
