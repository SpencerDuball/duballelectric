import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudRedo, CloudRedoPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudRedo",
  component: CloudRedo,
} as ComponentMeta<typeof CloudRedo>;

const Template: ComponentStory<typeof CloudRedo> = (args: CloudRedoPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudRedo {...args} />
    <CloudRedo {...args} fill="red.500" />
    <CloudRedo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
