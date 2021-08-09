import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WireNut, WireNutPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/WireNut",
  component: WireNut,
} as ComponentMeta<typeof WireNut>;

const Template: ComponentStory<typeof WireNut> = (args: WireNutPropsI) => (
  <x.div display="flex" gap="20px">
    <WireNut {...args} />
    <WireNut {...args} fill="red.500" />
    <WireNut {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
