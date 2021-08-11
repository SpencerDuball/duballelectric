import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Edit, EditPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Edit",
  component: Edit,
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = (args: EditPropsI) => (
  <Box display="flex" gap="20px">
    <Edit {...args} />
    <Edit {...args} fill="red.500" />
    <Edit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
