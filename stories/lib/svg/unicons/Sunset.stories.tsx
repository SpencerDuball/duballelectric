import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sunset, SunsetPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Sunset",
  component: Sunset,
} as ComponentMeta<typeof Sunset>;

const Template: ComponentStory<typeof Sunset> = (args: SunsetPropsI) => (
  <x.div display="flex" gap="20px">
    <Sunset {...args} />
    <Sunset {...args} fill="red.500" />
    <Sunset {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
