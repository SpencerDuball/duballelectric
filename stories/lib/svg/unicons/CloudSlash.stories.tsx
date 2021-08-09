import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudSlash, CloudSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSlash",
  component: CloudSlash,
} as ComponentMeta<typeof CloudSlash>;

const Template: ComponentStory<typeof CloudSlash> = (
  args: CloudSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudSlash {...args} />
    <CloudSlash {...args} fill="red.500" />
    <CloudSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
