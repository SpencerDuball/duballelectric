import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MapMarkerSlash, MapMarkerSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarkerSlash",
  component: MapMarkerSlash,
} as ComponentMeta<typeof MapMarkerSlash>;

const Template: ComponentStory<typeof MapMarkerSlash> = (
  args: MapMarkerSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <MapMarkerSlash {...args} />
    <MapMarkerSlash {...args} fill="red.500" />
    <MapMarkerSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
