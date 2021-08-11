import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BabyCarriage, BabyCarriagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BabyCarriage",
  component: BabyCarriage,
} as ComponentMeta<typeof BabyCarriage>;

const Template: ComponentStory<typeof BabyCarriage> = (
  args: BabyCarriagePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BabyCarriage {...args} />
    <BabyCarriage {...args} fill="red.500" />
    <BabyCarriage {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
