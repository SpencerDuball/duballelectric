import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Subject, SubjectPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Subject",
  component: Subject,
} as ComponentMeta<typeof Subject>;

const Template: ComponentStory<typeof Subject> = (args: SubjectPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Subject {...args} />
    <Subject {...args} fill="red.500" />
    <Subject {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
