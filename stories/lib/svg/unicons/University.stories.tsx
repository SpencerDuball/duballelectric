import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { University, UniversityPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/University",
  component: University,
} as ComponentMeta<typeof University>;

const Template: ComponentStory<typeof University> = (
  args: UniversityPropsI
) => (
  <Box display="flex" gap="20px">
    <University {...args} />
    <University {...args} fill="red.500" />
    <University {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
