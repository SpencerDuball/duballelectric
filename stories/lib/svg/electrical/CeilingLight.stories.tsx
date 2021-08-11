import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CeilingLight, CeilingLightPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/CeilingLight",
  component: CeilingLight,
} as ComponentMeta<typeof CeilingLight>;

const Template: ComponentStory<typeof CeilingLight> = (
  args: CeilingLightPropsI
) => (
  <Box display="flex" gap="20px">
    <CeilingLight {...args} />
    <CeilingLight {...args} fill="red.500" />
    <CeilingLight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
