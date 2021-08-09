import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sitemap, SitemapPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sitemap",
  component: Sitemap,
} as ComponentMeta<typeof Sitemap>;

const Template: ComponentStory<typeof Sitemap> = (args: SitemapPropsI) => (
  <x.div display="flex" gap="20px">
    <Sitemap {...args} />
    <Sitemap {...args} fill="red.500" />
    <Sitemap {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
