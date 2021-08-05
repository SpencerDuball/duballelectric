import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Shield, ShieldPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Shield",
  component: Shield,
} as ComponentMeta<typeof Shield>;

const Template: ComponentStory<typeof Shield> = (args: ShieldPropsI) => (
  <x.div display="flex" gap="20px">
    <Shield {...args} />
    <Shield {...args} fill="red.500" />
    <Shield {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
