import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MapMarkerQuestion, MapMarkerQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarkerQuestion",
  component: MapMarkerQuestion,
} as ComponentMeta<typeof MapMarkerQuestion>;

const Template: ComponentStory<typeof MapMarkerQuestion> = (
  args: MapMarkerQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <MapMarkerQuestion {...args} />
    <MapMarkerQuestion {...args} fill="red.500" />
    <MapMarkerQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
