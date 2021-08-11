import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Gitlab, GitlabPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Gitlab",
  component: Gitlab,
} as ComponentMeta<typeof Gitlab>;

const Template: ComponentStory<typeof Gitlab> = (args: GitlabPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Gitlab {...args} />
    <Gitlab {...args} fill="red.500" />
    <Gitlab {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
