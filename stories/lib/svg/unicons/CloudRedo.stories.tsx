import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudRedo, CloudRedoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudRedo",
  component: CloudRedo,
} as ComponentMeta<typeof CloudRedo>;

const Template: ComponentStory<typeof CloudRedo> = (args: CloudRedoPropsI) => (
  <Box display="flex" gap="20px">
    <CloudRedo {...args} />
    <CloudRedo {...args} fill="red.500" />
    <CloudRedo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
