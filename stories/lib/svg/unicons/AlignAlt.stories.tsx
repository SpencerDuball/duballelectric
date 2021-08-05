import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignAlt, AlignAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AlignAlt",
  component: AlignAlt,
} as ComponentMeta<typeof AlignAlt>;

const Template: ComponentStory<typeof AlignAlt> = (args: AlignAltPropsI) => (
  <x.div display="flex" gap="20px">
    <AlignAlt {...args} />
    <AlignAlt {...args} fill="red.500" />
    <AlignAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
