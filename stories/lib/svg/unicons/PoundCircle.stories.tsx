import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PoundCircle, PoundCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PoundCircle",
  component: PoundCircle,
} as ComponentMeta<typeof PoundCircle>;

const Template: ComponentStory<typeof PoundCircle> = (
  args: PoundCirclePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PoundCircle {...args} />
    <PoundCircle {...args} fill="red.500" />
    <PoundCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
