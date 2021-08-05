import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AndroidAlt, AndroidAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AndroidAlt",
  component: AndroidAlt,
} as ComponentMeta<typeof AndroidAlt>;

const Template: ComponentStory<typeof AndroidAlt> = (
  args: AndroidAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <AndroidAlt {...args} />
    <AndroidAlt {...args} fill="red.500" />
    <AndroidAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
