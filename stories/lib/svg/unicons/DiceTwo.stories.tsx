import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DiceTwo, DiceTwoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiceTwo",
  component: DiceTwo,
} as ComponentMeta<typeof DiceTwo>;

const Template: ComponentStory<typeof DiceTwo> = (args: DiceTwoPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <DiceTwo {...args} />
    <DiceTwo {...args} fill="red.500" />
    <DiceTwo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
