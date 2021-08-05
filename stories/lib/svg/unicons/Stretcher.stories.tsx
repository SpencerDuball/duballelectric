import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Stretcher, StretcherPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Stretcher",
  component: Stretcher,
} as ComponentMeta<typeof Stretcher>;

const Template: ComponentStory<typeof Stretcher> = (args: StretcherPropsI) => (
  <x.div display="flex" gap="20px">
    <Stretcher {...args} />
    <Stretcher {...args} fill="red.500" />
    <Stretcher {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
