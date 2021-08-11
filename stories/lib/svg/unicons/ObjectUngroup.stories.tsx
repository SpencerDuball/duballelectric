import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ObjectUngroup, ObjectUngroupPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ObjectUngroup",
  component: ObjectUngroup,
} as ComponentMeta<typeof ObjectUngroup>;

const Template: ComponentStory<typeof ObjectUngroup> = (
  args: ObjectUngroupPropsI
) => (
  <Box display="flex" gap="20px">
    <ObjectUngroup {...args} />
    <ObjectUngroup {...args} fill="red.500" />
    <ObjectUngroup {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
