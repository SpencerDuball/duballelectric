import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TumblrSquare, TumblrSquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TumblrSquare",
  component: TumblrSquare,
} as ComponentMeta<typeof TumblrSquare>;

const Template: ComponentStory<typeof TumblrSquare> = (
  args: TumblrSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <TumblrSquare {...args} />
    <TumblrSquare {...args} fill="red.500" />
    <TumblrSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
