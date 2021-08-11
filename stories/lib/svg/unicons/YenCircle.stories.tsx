import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { YenCircle, YenCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/YenCircle",
  component: YenCircle,
} as ComponentMeta<typeof YenCircle>;

const Template: ComponentStory<typeof YenCircle> = (args: YenCirclePropsI) => (
  <Box display="flex" gap="20px">
    <YenCircle {...args} />
    <YenCircle {...args} fill="red.500" />
    <YenCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
