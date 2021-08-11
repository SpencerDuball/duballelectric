import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Switch, SwitchPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args: SwitchPropsI) => (
  <Box display="flex" gap="20px">
    <Switch {...args} />
    <Switch {...args} fill="red.500" />
    <Switch {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
