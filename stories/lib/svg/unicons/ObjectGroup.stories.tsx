import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ObjectGroup, ObjectGroupPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ObjectGroup",
  component: ObjectGroup,
} as ComponentMeta<typeof ObjectGroup>;

const Template: ComponentStory<typeof ObjectGroup> = (
  args: ObjectGroupPropsI
) => (
  <Box display="flex" gap="20px">
    <ObjectGroup {...args} />
    <ObjectGroup {...args} fill="red.500" />
    <ObjectGroup {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
