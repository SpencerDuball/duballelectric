import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShieldQuestion, ShieldQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShieldQuestion",
  component: ShieldQuestion,
} as ComponentMeta<typeof ShieldQuestion>;

const Template: ComponentStory<typeof ShieldQuestion> = (
  args: ShieldQuestionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ShieldQuestion {...args} />
    <ShieldQuestion {...args} fill="red.500" />
    <ShieldQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
