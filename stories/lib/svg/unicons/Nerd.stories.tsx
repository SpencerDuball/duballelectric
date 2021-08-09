import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Nerd, NerdPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Nerd",
  component: Nerd,
} as ComponentMeta<typeof Nerd>;

const Template: ComponentStory<typeof Nerd> = (args: NerdPropsI) => (
  <x.div display="flex" gap="20px">
    <Nerd {...args} />
    <Nerd {...args} fill="red.500" />
    <Nerd {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
