import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PanoramaV, PanoramaVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PanoramaV",
  component: PanoramaV,
} as ComponentMeta<typeof PanoramaV>;

const Template: ComponentStory<typeof PanoramaV> = (args: PanoramaVPropsI) => (
  <x.div display="flex" gap="20px">
    <PanoramaV {...args} />
    <PanoramaV {...args} fill="red.500" />
    <PanoramaV {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
