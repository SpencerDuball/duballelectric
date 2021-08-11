import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BalanceScale, BalanceScalePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BalanceScale",
  component: BalanceScale,
} as ComponentMeta<typeof BalanceScale>;

const Template: ComponentStory<typeof BalanceScale> = (
  args: BalanceScalePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BalanceScale {...args} />
    <BalanceScale {...args} fill="red.500" />
    <BalanceScale {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
