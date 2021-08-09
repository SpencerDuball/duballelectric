import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Rss, RssPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Rss",
  component: Rss,
} as ComponentMeta<typeof Rss>;

const Template: ComponentStory<typeof Rss> = (args: RssPropsI) => (
  <x.div display="flex" gap="20px">
    <Rss {...args} />
    <Rss {...args} fill="red.500" />
    <Rss {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
