import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { RulerCombined, RulerCombinedPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/RulerCombined",
  component: RulerCombined,
} as ComponentMeta<typeof RulerCombined>;

const Template: ComponentStory<typeof RulerCombined> = (
  args: RulerCombinedPropsI
) => (
  <x.div display="flex" gap="20px">
    <RulerCombined {...args} />
    <RulerCombined {...args} fill="red.500" />
    <RulerCombined {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
