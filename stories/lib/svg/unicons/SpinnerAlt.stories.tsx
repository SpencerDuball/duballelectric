import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SpinnerAlt, SpinnerAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SpinnerAlt",
  component: SpinnerAlt,
} as ComponentMeta<typeof SpinnerAlt>;

const Template: ComponentStory<typeof SpinnerAlt> = (
  args: SpinnerAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SpinnerAlt {...args} />
    <SpinnerAlt {...args} fill="red.500" />
    <SpinnerAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
