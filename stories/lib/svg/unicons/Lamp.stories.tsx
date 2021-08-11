import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Lamp, LampPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Lamp",
  component: Lamp,
} as ComponentMeta<typeof Lamp>;

const Template: ComponentStory<typeof Lamp> = (args: LampPropsI) => (
  <Box display="flex" gap="20px">
    <Lamp {...args} />
    <Lamp {...args} fill="red.500" />
    <Lamp {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
