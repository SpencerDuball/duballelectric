import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CircleLayer, CircleLayerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CircleLayer",
  component: CircleLayer,
} as ComponentMeta<typeof CircleLayer>;

const Template: ComponentStory<typeof CircleLayer> = (
  args: CircleLayerPropsI
) => (
  <x.div display="flex" gap="20px">
    <CircleLayer {...args} />
    <CircleLayer {...args} fill="red.500" />
    <CircleLayer {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
