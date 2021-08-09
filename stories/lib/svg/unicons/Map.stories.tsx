import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Map, MapPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Map",
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args: MapPropsI) => (
  <x.div display="flex" gap="20px">
    <Map {...args} />
    <Map {...args} fill="red.500" />
    <Map {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
