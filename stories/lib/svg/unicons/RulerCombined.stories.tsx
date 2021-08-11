import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { RulerCombined, RulerCombinedPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RulerCombined",
  component: RulerCombined,
} as ComponentMeta<typeof RulerCombined>;

const Template: ComponentStory<typeof RulerCombined> = (
  args: RulerCombinedPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <RulerCombined {...args} />
    <RulerCombined {...args} fill="red.500" />
    <RulerCombined {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
