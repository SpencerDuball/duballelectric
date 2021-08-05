import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Shuffle, ShufflePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Shuffle",
  component: Shuffle,
} as ComponentMeta<typeof Shuffle>;

const Template: ComponentStory<typeof Shuffle> = (args: ShufflePropsI) => (
  <x.div display="flex" gap="20px">
    <Shuffle {...args} />
    <Shuffle {...args} fill="red.500" />
    <Shuffle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
