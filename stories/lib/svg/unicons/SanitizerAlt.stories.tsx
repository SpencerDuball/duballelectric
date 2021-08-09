import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SanitizerAlt, SanitizerAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SanitizerAlt",
  component: SanitizerAlt,
} as ComponentMeta<typeof SanitizerAlt>;

const Template: ComponentStory<typeof SanitizerAlt> = (
  args: SanitizerAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SanitizerAlt {...args} />
    <SanitizerAlt {...args} fill="red.500" />
    <SanitizerAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
