import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ThumbsDown, ThumbsDownPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ThumbsDown",
  component: ThumbsDown,
} as ComponentMeta<typeof ThumbsDown>;

const Template: ComponentStory<typeof ThumbsDown> = (
  args: ThumbsDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <ThumbsDown {...args} />
    <ThumbsDown {...args} fill="red.500" />
    <ThumbsDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
