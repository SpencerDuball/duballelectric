import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LinkAlt, LinkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LinkAlt",
  component: LinkAlt,
} as ComponentMeta<typeof LinkAlt>;

const Template: ComponentStory<typeof LinkAlt> = (args: LinkAltPropsI) => (
  <Box display="flex" gap="20px">
    <LinkAlt {...args} />
    <LinkAlt {...args} fill="red.500" />
    <LinkAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
