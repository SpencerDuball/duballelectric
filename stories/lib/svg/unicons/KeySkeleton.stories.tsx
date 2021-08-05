import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { KeySkeleton, KeySkeletonPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/KeySkeleton",
  component: KeySkeleton,
} as ComponentMeta<typeof KeySkeleton>;

const Template: ComponentStory<typeof KeySkeleton> = (
  args: KeySkeletonPropsI
) => (
  <x.div display="flex" gap="20px">
    <KeySkeleton {...args} />
    <KeySkeleton {...args} fill="red.500" />
    <KeySkeleton {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
