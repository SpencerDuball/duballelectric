import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ServerNetworkAlt, ServerNetworkAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ServerNetworkAlt",
  component: ServerNetworkAlt,
} as ComponentMeta<typeof ServerNetworkAlt>;

const Template: ComponentStory<typeof ServerNetworkAlt> = (
  args: ServerNetworkAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ServerNetworkAlt {...args} />
    <ServerNetworkAlt {...args} fill="red.500" />
    <ServerNetworkAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
