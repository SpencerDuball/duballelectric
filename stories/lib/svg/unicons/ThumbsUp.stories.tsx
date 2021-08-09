import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ThumbsUp, ThumbsUpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ThumbsUp",
  component: ThumbsUp,
} as ComponentMeta<typeof ThumbsUp>;

const Template: ComponentStory<typeof ThumbsUp> = (args: ThumbsUpPropsI) => (
  <x.div display="flex" gap="20px">
    <ThumbsUp {...args} />
    <ThumbsUp {...args} fill="red.500" />
    <ThumbsUp {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
