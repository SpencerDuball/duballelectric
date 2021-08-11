import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Plus, PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Plus",
  component: Plus,
} as ComponentMeta<typeof Plus>;

const Template: ComponentStory<typeof Plus> = (args: PlusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Plus {...args} />
    <Plus {...args} fill="red.500" />
    <Plus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
