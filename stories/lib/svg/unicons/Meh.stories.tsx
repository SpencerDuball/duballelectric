import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Meh, MehPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Meh",
  component: Meh,
} as ComponentMeta<typeof Meh>;

const Template: ComponentStory<typeof Meh> = (args: MehPropsI) => (
  <x.div display="flex" gap="20px">
    <Meh {...args} />
    <Meh {...args} fill="red.500" />
    <Meh {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
