import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BookmarkFull, BookmarkFullPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BookmarkFull",
  component: BookmarkFull,
} as ComponentMeta<typeof BookmarkFull>;

const Template: ComponentStory<typeof BookmarkFull> = (
  args: BookmarkFullPropsI
) => (
  <x.div display="flex" gap="20px">
    <BookmarkFull {...args} />
    <BookmarkFull {...args} fill="red.500" />
    <BookmarkFull {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
