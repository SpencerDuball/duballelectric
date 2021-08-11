import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SortAmountDown, SortAmountDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SortAmountDown",
  component: SortAmountDown,
} as ComponentMeta<typeof SortAmountDown>;

const Template: ComponentStory<typeof SortAmountDown> = (
  args: SortAmountDownPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SortAmountDown {...args} />
    <SortAmountDown {...args} fill="red.500" />
    <SortAmountDown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
