import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { N18Plus, N18PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N18Plus",
  component: N18Plus,
} as ComponentMeta<typeof N18Plus>;

const Template: ComponentStory<typeof N18Plus> = (args: N18PlusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <N18Plus {...args} />
    <N18Plus {...args} fill="red.500" />
    <N18Plus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
