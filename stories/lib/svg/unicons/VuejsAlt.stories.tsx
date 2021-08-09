import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VuejsAlt, VuejsAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VuejsAlt",
  component: VuejsAlt,
} as ComponentMeta<typeof VuejsAlt>;

const Template: ComponentStory<typeof VuejsAlt> = (args: VuejsAltPropsI) => (
  <x.div display="flex" gap="20px">
    <VuejsAlt {...args} />
    <VuejsAlt {...args} fill="red.500" />
    <VuejsAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
