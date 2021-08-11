import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Wordpress, WordpressPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Wordpress",
  component: Wordpress,
} as ComponentMeta<typeof Wordpress>;

const Template: ComponentStory<typeof Wordpress> = (args: WordpressPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Wordpress {...args} />
    <Wordpress {...args} fill="red.500" />
    <Wordpress {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
