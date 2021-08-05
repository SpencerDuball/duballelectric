import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MapMarkerInfo, MapMarkerInfoPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MapMarkerInfo",
  component: MapMarkerInfo,
} as ComponentMeta<typeof MapMarkerInfo>;

const Template: ComponentStory<typeof MapMarkerInfo> = (
  args: MapMarkerInfoPropsI
) => (
  <x.div display="flex" gap="20px">
    <MapMarkerInfo {...args} />
    <MapMarkerInfo {...args} fill="red.500" />
    <MapMarkerInfo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
