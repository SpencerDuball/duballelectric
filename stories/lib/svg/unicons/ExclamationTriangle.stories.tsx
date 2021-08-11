import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  ExclamationTriangle,
  ExclamationTrianglePropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExclamationTriangle",
  component: ExclamationTriangle,
} as ComponentMeta<typeof ExclamationTriangle>;

const Template: ComponentStory<typeof ExclamationTriangle> = (
  args: ExclamationTrianglePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ExclamationTriangle {...args} />
    <ExclamationTriangle {...args} fill="red.500" />
    <ExclamationTriangle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
