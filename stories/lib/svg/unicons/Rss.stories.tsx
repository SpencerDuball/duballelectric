import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Rss, RssPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Rss",
  component: Rss,
} as ComponentMeta<typeof Rss>;

const Template: ComponentStory<typeof Rss> = (args: RssPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Rss {...args} />
    <Rss {...args} fill="red.500" />
    <Rss {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
