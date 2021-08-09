import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Kid, KidPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Kid",
  component: Kid,
} as ComponentMeta<typeof Kid>;

const Template: ComponentStory<typeof Kid> = (args: KidPropsI) => (
  <x.div display="flex" gap="20px">
    <Kid {...args} />
    <Kid {...args} fill="red.500" />
    <Kid {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
