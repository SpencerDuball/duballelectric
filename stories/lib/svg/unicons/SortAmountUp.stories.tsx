import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SortAmountUp, SortAmountUpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SortAmountUp",
  component: SortAmountUp,
} as ComponentMeta<typeof SortAmountUp>;

const Template: ComponentStory<typeof SortAmountUp> = (
  args: SortAmountUpPropsI
) => (
  <Box display="flex" gap="20px">
    <SortAmountUp {...args} />
    <SortAmountUp {...args} fill="red.500" />
    <SortAmountUp {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
