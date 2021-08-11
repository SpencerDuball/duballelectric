import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExclamationOctagon, ExclamationOctagonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExclamationOctagon",
  component: ExclamationOctagon,
} as ComponentMeta<typeof ExclamationOctagon>;

const Template: ComponentStory<typeof ExclamationOctagon> = (
  args: ExclamationOctagonPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ExclamationOctagon {...args} />
    <ExclamationOctagon {...args} fill="red.500" />
    <ExclamationOctagon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
