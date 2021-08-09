import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ServerNetwork, ServerNetworkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ServerNetwork",
  component: ServerNetwork,
} as ComponentMeta<typeof ServerNetwork>;

const Template: ComponentStory<typeof ServerNetwork> = (
  args: ServerNetworkPropsI
) => (
  <x.div display="flex" gap="20px">
    <ServerNetwork {...args} />
    <ServerNetwork {...args} fill="red.500" />
    <ServerNetwork {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
