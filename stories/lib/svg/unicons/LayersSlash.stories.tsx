import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LayersSlash, LayersSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LayersSlash",
  component: LayersSlash,
} as ComponentMeta<typeof LayersSlash>;

const Template: ComponentStory<typeof LayersSlash> = (
  args: LayersSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <LayersSlash {...args} />
    <LayersSlash {...args} fill="red.500" />
    <LayersSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
