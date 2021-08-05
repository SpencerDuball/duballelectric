import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Ninja, NinjaPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Ninja",
  component: Ninja,
} as ComponentMeta<typeof Ninja>;

const Template: ComponentStory<typeof Ninja> = (args: NinjaPropsI) => (
  <x.div display="flex" gap="20px">
    <Ninja {...args} />
    <Ninja {...args} fill="red.500" />
    <Ninja {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
