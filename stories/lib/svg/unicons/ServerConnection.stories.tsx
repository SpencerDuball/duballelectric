import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ServerConnection, ServerConnectionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ServerConnection",
  component: ServerConnection,
} as ComponentMeta<typeof ServerConnection>;

const Template: ComponentStory<typeof ServerConnection> = (
  args: ServerConnectionPropsI
) => (
  <x.div display="flex" gap="20px">
    <ServerConnection {...args} />
    <ServerConnection {...args} fill="red.500" />
    <ServerConnection {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
