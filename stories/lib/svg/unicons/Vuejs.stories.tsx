import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Vuejs, VuejsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Vuejs",
  component: Vuejs,
} as ComponentMeta<typeof Vuejs>;

const Template: ComponentStory<typeof Vuejs> = (args: VuejsPropsI) => (
  <Box display="flex" gap="20px">
    <Vuejs {...args} />
    <Vuejs {...args} fill="red.500" />
    <Vuejs {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
