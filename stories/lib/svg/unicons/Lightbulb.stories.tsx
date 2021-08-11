import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Lightbulb, LightbulbPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Lightbulb",
  component: Lightbulb,
} as ComponentMeta<typeof Lightbulb>;

const Template: ComponentStory<typeof Lightbulb> = (args: LightbulbPropsI) => (
  <Box display="flex" gap="20px">
    <Lightbulb {...args} />
    <Lightbulb {...args} fill="red.500" />
    <Lightbulb {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
