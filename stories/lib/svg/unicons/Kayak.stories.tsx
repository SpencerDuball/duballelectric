import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Kayak, KayakPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Kayak",
  component: Kayak,
} as ComponentMeta<typeof Kayak>;

const Template: ComponentStory<typeof Kayak> = (args: KayakPropsI) => (
  <x.div display="flex" gap="20px">
    <Kayak {...args} />
    <Kayak {...args} fill="red.500" />
    <Kayak {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
