import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { InfoCircle, InfoCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/InfoCircle",
  component: InfoCircle,
} as ComponentMeta<typeof InfoCircle>;

const Template: ComponentStory<typeof InfoCircle> = (
  args: InfoCirclePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <InfoCircle {...args} />
    <InfoCircle {...args} fill="red.500" />
    <InfoCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
