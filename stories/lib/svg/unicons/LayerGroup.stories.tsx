import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LayerGroup, LayerGroupPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LayerGroup",
  component: LayerGroup,
} as ComponentMeta<typeof LayerGroup>;

const Template: ComponentStory<typeof LayerGroup> = (
  args: LayerGroupPropsI
) => (
  <x.div display="flex" gap="20px">
    <LayerGroup {...args} />
    <LayerGroup {...args} fill="red.500" />
    <LayerGroup {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
