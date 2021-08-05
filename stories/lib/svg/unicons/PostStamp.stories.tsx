import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PostStamp, PostStampPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PostStamp",
  component: PostStamp,
} as ComponentMeta<typeof PostStamp>;

const Template: ComponentStory<typeof PostStamp> = (args: PostStampPropsI) => (
  <x.div display="flex" gap="20px">
    <PostStamp {...args} />
    <PostStamp {...args} fill="red.500" />
    <PostStamp {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
