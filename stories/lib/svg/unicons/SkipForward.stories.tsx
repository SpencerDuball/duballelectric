import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SkipForward, SkipForwardPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SkipForward",
  component: SkipForward,
} as ComponentMeta<typeof SkipForward>;

const Template: ComponentStory<typeof SkipForward> = (
  args: SkipForwardPropsI
) => (
  <x.div display="flex" gap="20px">
    <SkipForward {...args} />
    <SkipForward {...args} fill="red.500" />
    <SkipForward {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
