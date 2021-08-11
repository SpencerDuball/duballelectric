import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Save, SavePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Save",
  component: Save,
} as ComponentMeta<typeof Save>;

const Template: ComponentStory<typeof Save> = (args: SavePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Save {...args} />
    <Save {...args} fill="red.500" />
    <Save {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
