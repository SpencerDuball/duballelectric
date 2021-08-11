import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BasestationAlt, BasestationAltPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/BasestationAlt",
  component: BasestationAlt,
} as ComponentMeta<typeof BasestationAlt>;

const Template: ComponentStory<typeof BasestationAlt> = (
  args: BasestationAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BasestationAlt {...args} />
    <BasestationAlt {...args} fill="red.500" />
    <BasestationAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
