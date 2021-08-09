import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Capture, CapturePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Capture",
  component: Capture,
} as ComponentMeta<typeof Capture>;

const Template: ComponentStory<typeof Capture> = (args: CapturePropsI) => (
  <x.div display="flex" gap="20px">
    <Capture {...args} />
    <Capture {...args} fill="red.500" />
    <Capture {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
