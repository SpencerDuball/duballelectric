import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ThLarge, ThLargePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ThLarge",
  component: ThLarge,
} as ComponentMeta<typeof ThLarge>;

const Template: ComponentStory<typeof ThLarge> = (args: ThLargePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ThLarge {...args} />
    <ThLarge {...args} fill="red.500" />
    <ThLarge {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
