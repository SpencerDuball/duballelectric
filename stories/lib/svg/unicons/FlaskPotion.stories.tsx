import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FlaskPotion, FlaskPotionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FlaskPotion",
  component: FlaskPotion,
} as ComponentMeta<typeof FlaskPotion>;

const Template: ComponentStory<typeof FlaskPotion> = (
  args: FlaskPotionPropsI
) => (
  <Box display="flex" gap="20px">
    <FlaskPotion {...args} />
    <FlaskPotion {...args} fill="red.500" />
    <FlaskPotion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
