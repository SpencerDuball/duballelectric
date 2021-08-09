import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bookmark, BookmarkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bookmark",
  component: Bookmark,
} as ComponentMeta<typeof Bookmark>;

const Template: ComponentStory<typeof Bookmark> = (args: BookmarkPropsI) => (
  <x.div display="flex" gap="20px">
    <Bookmark {...args} />
    <Bookmark {...args} fill="red.500" />
    <Bookmark {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
