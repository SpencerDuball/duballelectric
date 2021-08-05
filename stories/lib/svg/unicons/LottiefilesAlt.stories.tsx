import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LottiefilesAlt, LottiefilesAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LottiefilesAlt",
  component: LottiefilesAlt,
} as ComponentMeta<typeof LottiefilesAlt>;

const Template: ComponentStory<typeof LottiefilesAlt> = (
  args: LottiefilesAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <LottiefilesAlt {...args} />
    <LottiefilesAlt {...args} fill="red.500" />
    <LottiefilesAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
