import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BloggerAlt, BloggerAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BloggerAlt",
  component: BloggerAlt,
} as ComponentMeta<typeof BloggerAlt>;

const Template: ComponentStory<typeof BloggerAlt> = (
  args: BloggerAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <BloggerAlt {...args} />
    <BloggerAlt {...args} fill="red.500" />
    <BloggerAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
