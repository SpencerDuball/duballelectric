import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WordpressSimple, WordpressSimplePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WordpressSimple",
  component: WordpressSimple,
} as ComponentMeta<typeof WordpressSimple>;

const Template: ComponentStory<typeof WordpressSimple> = (
  args: WordpressSimplePropsI
) => (
  <x.div display="flex" gap="20px">
    <WordpressSimple {...args} />
    <WordpressSimple {...args} fill="red.500" />
    <WordpressSimple {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
