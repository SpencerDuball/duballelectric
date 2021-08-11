import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Link, LinkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: LinkPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Link {...args} />
    <Link {...args} fill="red.500" />
    <Link {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
