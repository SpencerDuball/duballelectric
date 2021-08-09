import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MapPinAlt, MapPinAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapPinAlt",
  component: MapPinAlt,
} as ComponentMeta<typeof MapPinAlt>;

const Template: ComponentStory<typeof MapPinAlt> = (args: MapPinAltPropsI) => (
  <x.div display="flex" gap="20px">
    <MapPinAlt {...args} />
    <MapPinAlt {...args} fill="red.500" />
    <MapPinAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
