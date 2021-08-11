import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DiceOne, DiceOnePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiceOne",
  component: DiceOne,
} as ComponentMeta<typeof DiceOne>;

const Template: ComponentStory<typeof DiceOne> = (args: DiceOnePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <DiceOne {...args} />
    <DiceOne {...args} fill="red.500" />
    <DiceOne {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
