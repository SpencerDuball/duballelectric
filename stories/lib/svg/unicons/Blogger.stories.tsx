import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Blogger, BloggerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Blogger",
  component: Blogger,
} as ComponentMeta<typeof Blogger>;

const Template: ComponentStory<typeof Blogger> = (args: BloggerPropsI) => (
  <x.div display="flex" gap="20px">
    <Blogger {...args} />
    <Blogger {...args} fill="red.500" />
    <Blogger {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
