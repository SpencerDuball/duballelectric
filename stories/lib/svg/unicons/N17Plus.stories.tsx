import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { N17Plus, N17PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N17Plus",
  component: N17Plus,
} as ComponentMeta<typeof N17Plus>;

const Template: ComponentStory<typeof N17Plus> = (args: N17PlusPropsI) => (
  <Box display="flex" gap="20px">
    <N17Plus {...args} />
    <N17Plus {...args} fill="red.500" />
    <N17Plus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
