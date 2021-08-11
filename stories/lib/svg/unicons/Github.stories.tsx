import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Github, GithubPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Github",
  component: Github,
} as ComponentMeta<typeof Github>;

const Template: ComponentStory<typeof Github> = (args: GithubPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Github {...args} />
    <Github {...args} fill="red.500" />
    <Github {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
