import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Youtube, YoutubePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Youtube",
  component: Youtube,
} as ComponentMeta<typeof Youtube>;

const Template: ComponentStory<typeof Youtube> = (args: YoutubePropsI) => (
  <x.div display="flex" gap="20px">
    <Youtube {...args} />
    <Youtube {...args} fill="red.500" />
    <Youtube {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
