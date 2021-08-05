import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PanoramaH, PanoramaHPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PanoramaH",
  component: PanoramaH,
} as ComponentMeta<typeof PanoramaH>;

const Template: ComponentStory<typeof PanoramaH> = (args: PanoramaHPropsI) => (
  <x.div display="flex" gap="20px">
    <PanoramaH {...args} />
    <PanoramaH {...args} fill="red.500" />
    <PanoramaH {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
