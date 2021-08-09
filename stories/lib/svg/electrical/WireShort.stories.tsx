import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WireShort, WireShortPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/WireShort",
  component: WireShort,
} as ComponentMeta<typeof WireShort>;

const Template: ComponentStory<typeof WireShort> = (args: WireShortPropsI) => (
  <x.div display="flex" gap="20px">
    <WireShort {...args} />
    <WireShort {...args} fill="red.500" />
    <WireShort {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
