import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LayersAlt, LayersAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LayersAlt",
  component: LayersAlt,
} as ComponentMeta<typeof LayersAlt>;

const Template: ComponentStory<typeof LayersAlt> = (args: LayersAltPropsI) => (
  <x.div display="flex" gap="20px">
    <LayersAlt {...args} />
    <LayersAlt {...args} fill="red.500" />
    <LayersAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
