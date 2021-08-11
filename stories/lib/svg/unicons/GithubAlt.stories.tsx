import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GithubAlt, GithubAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GithubAlt",
  component: GithubAlt,
} as ComponentMeta<typeof GithubAlt>;

const Template: ComponentStory<typeof GithubAlt> = (args: GithubAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <GithubAlt {...args} />
    <GithubAlt {...args} fill="red.500" />
    <GithubAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
