import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LinkBroken, LinkBrokenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LinkBroken",
  component: LinkBroken,
} as ComponentMeta<typeof LinkBroken>;

const Template: ComponentStory<typeof LinkBroken> = (
  args: LinkBrokenPropsI
) => (
  <Box display="flex" gap="20px">
    <LinkBroken {...args} />
    <LinkBroken {...args} fill="red.500" />
    <LinkBroken {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
