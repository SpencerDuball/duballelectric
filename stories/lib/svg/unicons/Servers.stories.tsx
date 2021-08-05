import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Servers, ServersPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Servers",
  component: Servers,
} as ComponentMeta<typeof Servers>;

const Template: ComponentStory<typeof Servers> = (args: ServersPropsI) => (
  <x.div display="flex" gap="20px">
    <Servers {...args} />
    <Servers {...args} fill="red.500" />
    <Servers {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
