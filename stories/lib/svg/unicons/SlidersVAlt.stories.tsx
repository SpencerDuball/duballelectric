import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SlidersVAlt, SlidersVAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SlidersVAlt",
  component: SlidersVAlt,
} as ComponentMeta<typeof SlidersVAlt>;

const Template: ComponentStory<typeof SlidersVAlt> = (
  args: SlidersVAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SlidersVAlt {...args} />
    <SlidersVAlt {...args} fill="red.500" />
    <SlidersVAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
