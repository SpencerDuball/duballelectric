import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LayerGroupSlash, LayerGroupSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LayerGroupSlash",
  component: LayerGroupSlash,
} as ComponentMeta<typeof LayerGroupSlash>;

const Template: ComponentStory<typeof LayerGroupSlash> = (
  args: LayerGroupSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <LayerGroupSlash {...args} />
    <LayerGroupSlash {...args} fill="red.500" />
    <LayerGroupSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
