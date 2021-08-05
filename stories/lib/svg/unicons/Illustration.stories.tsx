import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Illustration, IllustrationPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Illustration",
  component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (
  args: IllustrationPropsI
) => (
  <x.div display="flex" gap="20px">
    <Illustration {...args} />
    <Illustration {...args} fill="red.500" />
    <Illustration {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
