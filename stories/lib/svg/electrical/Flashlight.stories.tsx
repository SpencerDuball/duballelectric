import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Flashlight, FlashlightPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Flashlight",
  component: Flashlight,
} as ComponentMeta<typeof Flashlight>;

const Template: ComponentStory<typeof Flashlight> = (
  args: FlashlightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Flashlight {...args} />
    <Flashlight {...args} fill="red.500" />
    <Flashlight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
