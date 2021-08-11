import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LeftIndent, LeftIndentPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LeftIndent",
  component: LeftIndent,
} as ComponentMeta<typeof LeftIndent>;

const Template: ComponentStory<typeof LeftIndent> = (
  args: LeftIndentPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <LeftIndent {...args} />
    <LeftIndent {...args} fill="red.500" />
    <LeftIndent {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
