import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PanoramaHAlt, PanoramaHAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PanoramaHAlt",
  component: PanoramaHAlt,
} as ComponentMeta<typeof PanoramaHAlt>;

const Template: ComponentStory<typeof PanoramaHAlt> = (
  args: PanoramaHAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <PanoramaHAlt {...args} />
    <PanoramaHAlt {...args} fill="red.500" />
    <PanoramaHAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
