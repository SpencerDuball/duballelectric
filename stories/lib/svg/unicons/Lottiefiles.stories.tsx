import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Lottiefiles, LottiefilesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Lottiefiles",
  component: Lottiefiles,
} as ComponentMeta<typeof Lottiefiles>;

const Template: ComponentStory<typeof Lottiefiles> = (
  args: LottiefilesPropsI
) => (
  <x.div display="flex" gap="20px">
    <Lottiefiles {...args} />
    <Lottiefiles {...args} fill="red.500" />
    <Lottiefiles {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
