import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DiceThree, DiceThreePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiceThree",
  component: DiceThree,
} as ComponentMeta<typeof DiceThree>;

const Template: ComponentStory<typeof DiceThree> = (args: DiceThreePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <DiceThree {...args} />
    <DiceThree {...args} fill="red.500" />
    <DiceThree {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
