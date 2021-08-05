import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Wordpress, WordpressPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Wordpress",
  component: Wordpress,
} as ComponentMeta<typeof Wordpress>;

const Template: ComponentStory<typeof Wordpress> = (args: WordpressPropsI) => (
  <x.div display="flex" gap="20px">
    <Wordpress {...args} />
    <Wordpress {...args} fill="red.500" />
    <Wordpress {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
