import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Trash, TrashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Trash",
  component: Trash,
} as ComponentMeta<typeof Trash>;

const Template: ComponentStory<typeof Trash> = (args: TrashPropsI) => (
  <Box display="flex" gap="20px">
    <Trash {...args} />
    <Trash {...args} fill="red.500" />
    <Trash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
