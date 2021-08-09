import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CeilingLight, CeilingLightPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/CeilingLight",
  component: CeilingLight,
} as ComponentMeta<typeof CeilingLight>;

const Template: ComponentStory<typeof CeilingLight> = (
  args: CeilingLightPropsI
) => (
  <x.div display="flex" gap="20px">
    <CeilingLight {...args} />
    <CeilingLight {...args} fill="red.500" />
    <CeilingLight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
