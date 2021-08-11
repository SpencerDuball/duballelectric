import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sitemap, SitemapPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sitemap",
  component: Sitemap,
} as ComponentMeta<typeof Sitemap>;

const Template: ComponentStory<typeof Sitemap> = (args: SitemapPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sitemap {...args} />
    <Sitemap {...args} fill="red.500" />
    <Sitemap {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
