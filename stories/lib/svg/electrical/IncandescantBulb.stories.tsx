import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { IncandescantBulb, IncandescantBulbPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/IncandescantBulb",
  component: IncandescantBulb,
} as ComponentMeta<typeof IncandescantBulb>;

const Template: ComponentStory<typeof IncandescantBulb> = (
  args: IncandescantBulbPropsI
) => (
  <Box display="flex" gap="20px">
    <IncandescantBulb {...args} />
    <IncandescantBulb {...args} fill="red.500" />
    <IncandescantBulb {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
