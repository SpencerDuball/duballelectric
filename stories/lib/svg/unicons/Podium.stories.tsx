import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Podium, PodiumPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Podium",
  component: Podium,
} as ComponentMeta<typeof Podium>;

const Template: ComponentStory<typeof Podium> = (args: PodiumPropsI) => (
  <x.div display="flex" gap="20px">
    <Podium {...args} />
    <Podium {...args} fill="red.500" />
    <Podium {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
