import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { KeySkeletonAlt, KeySkeletonAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeySkeletonAlt",
  component: KeySkeletonAlt,
} as ComponentMeta<typeof KeySkeletonAlt>;

const Template: ComponentStory<typeof KeySkeletonAlt> = (
  args: KeySkeletonAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <KeySkeletonAlt {...args} />
    <KeySkeletonAlt {...args} fill="red.500" />
    <KeySkeletonAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
