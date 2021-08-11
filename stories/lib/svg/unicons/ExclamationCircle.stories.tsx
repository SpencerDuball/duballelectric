import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExclamationCircle, ExclamationCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExclamationCircle",
  component: ExclamationCircle,
} as ComponentMeta<typeof ExclamationCircle>;

const Template: ComponentStory<typeof ExclamationCircle> = (
  args: ExclamationCirclePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ExclamationCircle {...args} />
    <ExclamationCircle {...args} fill="red.500" />
    <ExclamationCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
