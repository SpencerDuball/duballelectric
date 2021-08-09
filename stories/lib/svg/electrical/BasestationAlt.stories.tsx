import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BasestationAlt, BasestationAltPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/BasestationAlt",
  component: BasestationAlt,
} as ComponentMeta<typeof BasestationAlt>;

const Template: ComponentStory<typeof BasestationAlt> = (
  args: BasestationAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <BasestationAlt {...args} />
    <BasestationAlt {...args} fill="red.500" />
    <BasestationAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
