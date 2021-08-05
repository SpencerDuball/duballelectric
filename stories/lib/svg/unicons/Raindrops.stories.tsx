import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Raindrops, RaindropsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Raindrops",
  component: Raindrops,
} as ComponentMeta<typeof Raindrops>;

const Template: ComponentStory<typeof Raindrops> = (args: RaindropsPropsI) => (
  <x.div display="flex" gap="20px">
    <Raindrops {...args} />
    <Raindrops {...args} fill="red.500" />
    <Raindrops {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
