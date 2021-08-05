import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TachometerFastAlt, TachometerFastAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TachometerFastAlt",
  component: TachometerFastAlt,
} as ComponentMeta<typeof TachometerFastAlt>;

const Template: ComponentStory<typeof TachometerFastAlt> = (
  args: TachometerFastAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <TachometerFastAlt {...args} />
    <TachometerFastAlt {...args} fill="red.500" />
    <TachometerFastAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
