import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  CloudDataConnection,
  CloudDataConnectionPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudDataConnection",
  component: CloudDataConnection,
} as ComponentMeta<typeof CloudDataConnection>;

const Template: ComponentStory<typeof CloudDataConnection> = (
  args: CloudDataConnectionPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudDataConnection {...args} />
    <CloudDataConnection {...args} fill="red.500" />
    <CloudDataConnection {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
