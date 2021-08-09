import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Server, ServerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Server",
  component: Server,
} as ComponentMeta<typeof Server>;

const Template: ComponentStory<typeof Server> = (args: ServerPropsI) => (
  <x.div display="flex" gap="20px">
    <Server {...args} />
    <Server {...args} fill="red.500" />
    <Server {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
