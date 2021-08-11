import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LuggageCart, LuggageCartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LuggageCart",
  component: LuggageCart,
} as ComponentMeta<typeof LuggageCart>;

const Template: ComponentStory<typeof LuggageCart> = (
  args: LuggageCartPropsI
) => (
  <Box display="flex" gap="20px">
    <LuggageCart {...args} />
    <LuggageCart {...args} fill="red.500" />
    <LuggageCart {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
