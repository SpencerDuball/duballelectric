import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LinkAdd, LinkAddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LinkAdd",
  component: LinkAdd,
} as ComponentMeta<typeof LinkAdd>;

const Template: ComponentStory<typeof LinkAdd> = (args: LinkAddPropsI) => (
  <Box display="flex" gap="20px">
    <LinkAdd {...args} />
    <LinkAdd {...args} fill="red.500" />
    <LinkAdd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
